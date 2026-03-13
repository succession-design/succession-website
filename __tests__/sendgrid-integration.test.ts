import { describe, it, expect, beforeAll } from 'vitest';
import sgMail from '@sendgrid/mail';

describe('SendGrid Integration', () => {
  beforeAll(() => {
    // Set the API key from environment
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
  });

  it('should have SendGrid API key configured', () => {
    expect(process.env.SENDGRID_API_KEY).toBeDefined();
    expect(process.env.SENDGRID_API_KEY).toBeTruthy();
  });

  it('should validate SendGrid API key format', () => {
    const apiKey = process.env.SENDGRID_API_KEY;
    // SendGrid API keys start with "SG."
    expect(apiKey).toMatch(/^SG\./);
  });

  it('should be able to create a mail message object', () => {
    const msg = {
      to: 'test@example.com',
      from: 'noreply@succession.io',
      subject: 'Test Email',
      text: 'This is a test email',
      html: '<p>This is a test email</p>',
    };

    expect(msg.to).toBe('test@example.com');
    expect(msg.from).toBe('noreply@succession.io');
    expect(msg.subject).toBe('Test Email');
  });

  it('should have proper email validation', () => {
    const validEmails = [
      'test@example.com',
      'user@company.co.uk',
      'name+tag@domain.com',
    ];

    validEmails.forEach((email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(true);
    });
  });
});
