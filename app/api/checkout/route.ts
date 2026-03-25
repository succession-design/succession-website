import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-02-25.clover',
});

// Map tier slugs to env var price IDs
const PRICE_IDS: Record<string, string> = {
  trial: process.env.STRIPE_PRICE_TRIAL || '',
  core: process.env.STRIPE_PRICE_CORE || '',
  continuity: process.env.STRIPE_PRICE_CONTINUITY || '',
};

const TIER_NAMES: Record<string, string> = {
  trial: 'Deal Prep — $97',
  core: 'Deal Platform — $197/mo',
  continuity: 'Transaction Suite — $347/mo',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tier, email, name, company, successUrl, cancelUrl } = body;

    if (!tier || !PRICE_IDS[tier]) {
      return NextResponse.json(
        { error: 'Invalid tier. Must be one of: trial, core, continuity' },
        { status: 400 }
      );
    }

    const priceId = PRICE_IDS[tier];
    if (!priceId) {
      return NextResponse.json(
        { error: `Price ID for tier "${tier}" is not configured. Please set STRIPE_PRICE_${tier.toUpperCase()} in environment variables.` },
        { status: 500 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY.' },
        { status: 500 }
      );
    }

    const origin = req.headers.get('origin') || 'https://successionio.com';
    const defaultSuccessUrl = `${origin}/checkout/success?tier=${tier}&session_id={CHECKOUT_SESSION_ID}`;
    const defaultCancelUrl = `${origin}/pricing?canceled=true`;

    // Build customer data
    const customerData: Stripe.Checkout.SessionCreateParams = {
      mode: tier === 'trial' ? 'payment' : 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl || defaultSuccessUrl,
      cancel_url: cancelUrl || defaultCancelUrl,
      metadata: {
        tier,
        company: company || '',
      },
    };

    // Pre-fill customer email if provided
    if (email) {
      customerData.customer_email = email;
    }

    // Add customer name if provided
    if (name) {
      customerData.billing_address_collection = 'auto';
    }

    const session = await stripe.checkout.sessions.create(customerData);

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
