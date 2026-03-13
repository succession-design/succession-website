import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { getFollowUpEmailHTML, getFollowUpEmailText } from '@/lib/follow-up-email-template';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Helper function to get inquiry type label
function getInquiryTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    general: 'General Inquiry',
    demo: 'Demo Request',
    support: 'Support',
    partnership: 'Partnership',
    pricing: 'Pricing Question',
  };
  return labels[type] || type;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, subject, message, type } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create email content for Succession team
    const teamEmailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Inquiry Type: ${type}
Subject: ${subject}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
    `;

    // Send email to Succession team
    const teamMsg = {
      to: 'succession@successionio.com',
      from: 'succession@successionio.com',
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: teamEmailContent,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #B8956A;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Inquiry Type:</strong> ${type}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #B8956A; border-radius: 3px;">
              ${message}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            Submitted at: ${new Date().toISOString()}
          </p>
        </div>
      `,
    };

    // Create confirmation email for user
    const userConfirmationEmail = {
      to: email,
      from: 'succession@successionio.com',
      subject: 'We Received Your Message - Succession',
      text: `
Hi ${name},

Thank you for reaching out to Succession! We've received your ${getInquiryTypeLabel(type).toLowerCase()} and will review it shortly.

Here's what we received:
- Subject: ${subject}
- Inquiry Type: ${getInquiryTypeLabel(type)}
${company ? `- Company: ${company}` : ''}

Our team typically responds within 24 business hours. If your inquiry is urgent, feel free to call us at 1 (832) 990-6378.

In the meantime, feel free to explore our platform and learn more about how Succession helps businesses capture their institutional knowledge.

Best regards,
The Succession Team

---
Succession - Capture Your Business Knowledge
https://succession.io
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #B8956A 0%, #9d7d5a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Succession</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Capture Your Business Knowledge</p>
          </div>

          <!-- Main Content -->
          <div style="background-color: #f9f9f9; padding: 30px 20px; border-radius: 0 0 8px 8px;">
            <p style="margin-top: 0; font-size: 16px;">Hi <strong>${name}</strong>,</p>
            
            <p style="font-size: 15px; line-height: 1.8;">
              Thank you for reaching out to Succession! We've received your <strong>${getInquiryTypeLabel(type).toLowerCase()}</strong> and will review it shortly.
            </p>

            <!-- Submission Details -->
            <div style="background-color: white; border-left: 4px solid #B8956A; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="margin: 0 0 10px 0; font-weight: 600; color: #B8956A;">Here's what we received:</p>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                <li style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</li>
                <li style="margin: 5px 0;"><strong>Inquiry Type:</strong> ${getInquiryTypeLabel(type)}</li>
                ${company ? `<li style="margin: 5px 0;"><strong>Company:</strong> ${company}</li>` : ''}
                <li style="margin: 5px 0;"><strong>Received:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</li>
              </ul>
            </div>

            <p style="font-size: 15px; line-height: 1.8; color: #555;">
              Our team typically responds within <strong>24 business hours</strong>. If your inquiry is urgent, feel free to call us at <a href="tel:+18329906378" style="color: #B8956A; text-decoration: none;"><strong>1 (832) 990-6378</strong></a>.
            </p>

            <p style="font-size: 15px; line-height: 1.8; color: #555;">
              In the meantime, feel free to explore our platform and learn more about how Succession helps businesses capture their institutional knowledge.
            </p>

            <!-- CTA -->
            <div style="text-align: center; margin: 25px 0;">
              <a href="https://succession.io" style="display: inline-block; background-color: #B8956A; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 14px;">
                Visit Succession
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">

            <p style="margin: 0; font-size: 13px; color: #999; text-align: center;">
              Best regards,<br>
              <strong>The Succession Team</strong>
            </p>

            <p style="margin: 15px 0 0 0; font-size: 12px; color: #bbb; text-align: center;">
              Succession - Capture Your Business Knowledge<br>
              <a href="https://succession.io" style="color: #B8956A; text-decoration: none;">https://succession.io</a>
            </p>
          </div>
        </div>
      `,
    };

    // Calculate send time for follow-up (24 hours from now)
    const followUpSendTime = Math.floor((Date.now() + 24 * 60 * 60 * 1000) / 1000);

    // Create scheduled follow-up email with case studies
    const followUpEmail = {
      to: email,
      from: 'succession@successionio.com',
      subject: 'Success Stories: How Succession is Closing More Deals',
      text: getFollowUpEmailText(name, type),
      html: getFollowUpEmailHTML(name, type),
      sendAt: followUpSendTime, // SendGrid scheduled send (Unix timestamp)
    };

    // Send all emails
    await Promise.all([
      sgMail.send(teamMsg),
      sgMail.send(userConfirmationEmail),
      sgMail.send(followUpEmail), // This will be scheduled for 24 hours later
    ]);

    // Log successful submission
    console.log('Contact form processed successfully:', {
      userEmail: email,
      teamEmail: 'succession@successionio.com',
      subject: subject,
      type: type,
      followUpScheduledFor: new Date(followUpSendTime * 1000).toISOString(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }

    return NextResponse.json(
      { error: 'Failed to process contact form. Please try again later.' },
      { status: 500 }
    );
  }
}
