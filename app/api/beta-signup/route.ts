import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export interface BetaSignupData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  companySize: "1-10" | "11-50" | "51-200" | "200+";
  yearsInBusiness: string;
  dealVolume: string;
  specificInterest: string;
  phone?: string;
  website?: string;
  timestamp: string;
}

// In-memory storage (replace with database in production)
const betaSignups: BetaSignupData[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      company,
      companySize,
      yearsInBusiness,
      dealVolume,
      specificInterest,
      phone,
      website,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create signup record
    const signup: BetaSignupData = {
      firstName,
      lastName,
      email,
      company,
      companySize,
      yearsInBusiness,
      dealVolume,
      specificInterest,
      phone,
      website,
      timestamp: new Date().toISOString(),
    };

    // Store signup
    betaSignups.push(signup);

    // Send welcome email to user
    await sgMail.send({
      to: email,
      from: "succession@successionio.com",
      subject: "Welcome to Succession Beta Program! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #B8956A; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Welcome to Succession Beta!</h1>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #333;">Hi ${firstName},</p>
            
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              Thank you for your interest in joining the Succession beta program! We're excited to have you on board.
            </p>
            
            <div style="background-color: white; border-left: 4px solid #B8956A; padding: 15px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #B8956A;">What's Next?</h3>
              <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #666;">
                <li>We'll review your application and send you access details within 24 hours</li>
                <li>You'll receive an email with download instructions for the beta app</li>
                <li>Join our exclusive beta tester Slack community for support and updates</li>
                <li>Share your feedback and help shape the future of Succession</li>
              </ul>
            </div>
            
            <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #333;">Beta Program Benefits:</h4>
              <ul style="margin: 10px 0; padding-left: 20px; font-size: 13px; color: #666;">
                <li>Early access to new features before public launch</li>
                <li>Direct influence on product development</li>
                <li>Special pricing for beta participants</li>
                <li>Dedicated support from our team</li>
                <li>Recognition as a founding partner</li>
              </ul>
            </div>
            
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              If you have any questions in the meantime, feel free to reply to this email or contact us at <strong>succession@successionio.com</strong>.
            </p>
            
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              Best regards,<br/>
              <strong>The Succession Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
            <p>Succession • Capture Your Business Knowledge</p>
          </div>
        </div>
      `,
    });

    // Send notification to team
    await sgMail.send({
      to: "succession@successionio.com",
      from: "succession@successionio.com",
      subject: `New Beta Signup: ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Beta Program Signup</h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Company Size:</strong> ${companySize}</p>
            <p><strong>Years in Business:</strong> ${yearsInBusiness}</p>
            <p><strong>Deal Volume:</strong> ${dealVolume}</p>
            <p><strong>Specific Interest:</strong> ${specificInterest}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
            <p><strong>Signup Time:</strong> ${new Date(signup.timestamp).toLocaleString()}</p>
          </div>
          
          <p style="margin-top: 20px;">
            <a href="mailto:${email}" style="background-color: #B8956A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reply to ${firstName}
            </a>
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Beta signup successful!",
        signup,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Beta signup error:", error);

    return NextResponse.json(
      {
        error: "Failed to process beta signup",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all signups (for admin dashboard)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  return NextResponse.json({
    total: betaSignups.length,
    signups: betaSignups,
  });
}
