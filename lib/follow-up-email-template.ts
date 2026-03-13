/**
 * Follow-up email templates with case studies
 * Customized based on inquiry type (broker vs business owner)
 * Sent 24 hours after initial contact
 */

// ============================================
// BROKER-FOCUSED CASE STUDIES
// ============================================

function getBrokerFollowUpEmailHTML(name: string): string {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #B8956A 0%, #9d7d5a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Succession</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Closing More Deals for Brokers</p>
      </div>

      <!-- Main Content -->
      <div style="background-color: #f9f9f9; padding: 30px 20px;">
        <p style="margin-top: 0; font-size: 16px;">Hi <strong>${name}</strong>,</p>
        
        <p style="font-size: 15px; line-height: 1.8;">
          We hope you're having a great day! We wanted to follow up on your demo request and share how brokers are already using Succession to close more deals and accelerate their transaction timelines.
        </p>

        <!-- Case Studies Section -->
        <div style="margin: 30px 0;">
          <h2 style="color: #B8956A; font-size: 20px; margin-bottom: 20px;">How Brokers Are Closing More Deals with Succession</h2>

          <!-- Case Study 1: Broker Firm -->
          <div style="background-color: white; border-left: 4px solid #B8956A; padding: 20px; margin-bottom: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333; font-size: 16px;">📈 Mid-Market Brokerage: 3 Additional Deals Closed in Q1</h3>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Challenge:</strong> A 15-person brokerage was losing 20-30% of deals due to buyer uncertainty during diligence. Transactions stalled when operational details weren't documented.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Solution:</strong> Introduced Succession to their seller clients. Owners completed 3-5 guided interviews capturing customer relationships, vendor networks, and operational processes.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Result:</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
              <li>✓ 3 additional deals closed that would have otherwise stalled</li>
              <li>✓ Average deal cycle reduced from 120 to 90 days</li>
              <li>✓ Buyer confidence increased 35%</li>
              <li>✓ Average purchase price held at 98% of asking (vs 92% industry average)</li>
            </ul>
          </div>

          <!-- Case Study 2: Boutique Advisory -->
          <div style="background-color: white; border-left: 4px solid #B8956A; padding: 20px; margin-bottom: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333; font-size: 16px;">🎯 Boutique Advisory Firm: Differentiated Listings Command Premium</h3>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Challenge:</strong> In a competitive market with 50+ similar businesses for sale, their clients' listings weren't standing out. Buyers had no way to evaluate operational quality.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Solution:</strong> Created professional handover documents for each listing using Succession, showcasing supplier relationships, customer loyalty programs, and seasonal insights.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Result:</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
              <li>✓ Listings with handover documents received 5x more inquiries</li>
              <li>✓ Average sale price 12% above asking</li>
              <li>✓ Faster time to close (average 65 days vs 95 days)</li>
              <li>✓ Clients now request Succession for every transaction</li>
            </ul>
          </div>

          <!-- Case Study 3: Broker Network -->
          <div style="background-color: white; border-left: 4px solid #B8956A; padding: 20px; margin-bottom: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333; font-size: 16px;">💼 National Broker Network: Reduced Diligence Surprises by 80%</h3>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Challenge:</strong> Post-closing disputes and renegotiations were costing deals. Buyers discovered operational surprises after signing that weren't disclosed upfront.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Solution:</strong> Required all sellers to complete Succession interviews. Handover documents became part of the standard due diligence package.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Result:</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
              <li>✓ Post-closing disputes dropped 80%</li>
              <li>✓ Buyer satisfaction scores increased from 7.2 to 8.8/10</li>
              <li>✓ Repeat business from buyers increased 45%</li>
              <li>✓ Referral rate from satisfied buyers doubled</li>
            </ul>
          </div>
        </div>

        <!-- Key Benefits for Brokers -->
        <div style="background-color: #FFF8F0; border: 1px solid #E8D4C4; padding: 20px; border-radius: 6px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #B8956A; font-size: 16px;">Why Brokers Love Succession</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
            <li style="margin: 8px 0; color: #555;">✓ Close more deals by reducing buyer uncertainty</li>
            <li style="margin: 8px 0; color: #555;">✓ Accelerate diligence and shorten deal cycles</li>
            <li style="margin: 8px 0; color: #555;">✓ Protect purchase prices with better buyer confidence</li>
            <li style="margin: 8px 0; color: #555;">✓ Differentiate listings in competitive markets</li>
            <li style="margin: 8px 0; color: #555;">✓ Reduce post-closing disputes and surprises</li>
            <li style="margin: 8px 0; color: #555;">✓ Build stronger buyer relationships and referrals</li>
          </ul>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 25px 0;">
          <p style="font-size: 15px; margin-bottom: 15px; color: #555;">
            Ready to see how Succession can transform your brokerage?
          </p>
          <a href="https://succession.io" style="display: inline-block; background-color: #B8956A; color: white; padding: 14px 35px; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 15px;">
            Schedule Your Demo
          </a>
        </div>

        <!-- Closing -->
        <p style="font-size: 14px; margin-top: 25px; color: #666;">
          If you have any questions or would like to discuss how Succession can specifically benefit your brokerage, just reply to this email or call us at <a href="tel:+18329906378" style="color: #B8956A; text-decoration: none;"><strong>1 (832) 990-6378</strong></a>.
        </p>

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
  `;
}

function getBrokerFollowUpEmailText(name: string): string {
  return `
Hi ${name},

We hope you're having a great day! We wanted to follow up on your demo request and share how brokers are already using Succession to close more deals and accelerate their transaction timelines.

HOW BROKERS ARE CLOSING MORE DEALS WITH SUCCESSION
===================================================

📈 Mid-Market Brokerage: 3 Additional Deals Closed in Q1
Challenge: A 15-person brokerage was losing 20-30% of deals due to buyer uncertainty.
Solution: Introduced Succession to their seller clients for guided interviews.
Result:
✓ 3 additional deals closed that would have otherwise stalled
✓ Average deal cycle reduced from 120 to 90 days
✓ Buyer confidence increased 35%
✓ Average purchase price held at 98% of asking (vs 92% industry average)

🎯 Boutique Advisory Firm: Differentiated Listings Command Premium
Challenge: In a competitive market, their clients' listings weren't standing out.
Solution: Created professional handover documents for each listing using Succession.
Result:
✓ Listings with handover documents received 5x more inquiries
✓ Average sale price 12% above asking
✓ Faster time to close (average 65 days vs 95 days)
✓ Clients now request Succession for every transaction

💼 National Broker Network: Reduced Diligence Surprises by 80%
Challenge: Post-closing disputes and renegotiations were costing deals.
Solution: Required all sellers to complete Succession interviews.
Result:
✓ Post-closing disputes dropped 80%
✓ Buyer satisfaction scores increased from 7.2 to 8.8/10
✓ Repeat business from buyers increased 45%
✓ Referral rate from satisfied buyers doubled

WHY BROKERS LOVE SUCCESSION
============================
✓ Close more deals by reducing buyer uncertainty
✓ Accelerate diligence and shorten deal cycles
✓ Protect purchase prices with better buyer confidence
✓ Differentiate listings in competitive markets
✓ Reduce post-closing disputes and surprises
✓ Build stronger buyer relationships and referrals

Ready to see how Succession can transform your brokerage?

Visit: https://succession.io

If you have any questions or would like to discuss how Succession can specifically benefit your brokerage, just reply to this email or call us at 1 (832) 990-6378.

Best regards,
The Succession Team

Succession - Capture Your Business Knowledge
https://succession.io
  `;
}

// ============================================
// BUSINESS OWNER-FOCUSED CASE STUDIES
// ============================================

function getOwnerFollowUpEmailHTML(name: string): string {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #B8956A 0%, #9d7d5a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Succession</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Your Business Knowledge, Preserved Forever</p>
      </div>

      <!-- Main Content -->
      <div style="background-color: #f9f9f9; padding: 30px 20px;">
        <p style="margin-top: 0; font-size: 16px;">Hi <strong>${name}</strong>,</p>
        
        <p style="font-size: 15px; line-height: 1.8;">
          We hope you're having a great day! We wanted to follow up on your inquiry and share inspiring stories from business owners who have successfully captured their knowledge and achieved smooth, profitable transitions.
        </p>

        <!-- Case Studies Section -->
        <div style="margin: 30px 0;">
          <h2 style="color: #B8956A; font-size: 20px; margin-bottom: 20px;">How Business Owners Are Securing Their Legacy</h2>

          <!-- Case Study 1: Service Business -->
          <div style="background-color: white; border-left: 4px solid #B8956A; padding: 20px; margin-bottom: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333; font-size: 16px;">💼 Service Business Owner: Clean Transition, Full Price</h3>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Challenge:</strong> After 25 years building a successful HVAC service business, the owner had all operational knowledge in their head—customer relationships, vendor negotiations, seasonal patterns, pricing strategies. The buyer was nervous about losing customers after the transition.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Solution:</strong> Completed 5 guided Succession interviews capturing everything the owner knew about running the business. The AI-generated handover document became the buyer's operational manual.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Result:</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
              <li>✓ Buyer confidence increased 40%</li>
              <li>✓ Deal closed at full asking price (vs typical 5-10% discount)</li>
              <li>✓ Zero post-closing disputes or renegotiations</li>
              <li>✓ 95% customer retention in first year</li>
            </ul>
          </div>

          <!-- Case Study 2: Retail Business -->
          <div style="background-color: white; border-left: 4px solid #B8956A; padding: 20px; margin-bottom: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333; font-size: 16px;">🎯 Retail Store Owner: Premium Valuation Through Documentation</h3>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Challenge:</strong> A successful retail boutique was competing with dozens of similar listings. Buyers couldn't see the difference between this well-run store and mediocre competitors. Initial offers came in 20% below expectations.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Solution:</strong> Created a professional handover document showcasing supplier relationships, customer loyalty programs, seasonal marketing strategies, and operational excellence.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Result:</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
              <li>✓ Listing received 5x more inquiries</li>
              <li>✓ Business sold for 15% above asking price</li>
              <li>✓ Multiple offers created competitive bidding</li>
              <li>✓ Buyer ready to implement documented strategies immediately</li>
            </ul>
          </div>

          <!-- Case Study 3: Manufacturing -->
          <div style="background-color: white; border-left: 4px solid #B8956A; padding: 20px; margin-bottom: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333; font-size: 16px;">🏭 Manufacturing Owner: Smooth Transition, Preserved Relationships</h3>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Challenge:</strong> A 30-year manufacturing business had deep relationships with key customers and suppliers. The owner worried that knowledge of these relationships would be lost, jeopardizing the business after the sale.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Solution:</strong> Documented all customer relationships, supplier negotiations, production processes, and quality standards through Succession interviews. Created a comprehensive operational playbook.
            </p>
            <p style="margin: 10px 0; font-size: 14px; color: #555;">
              <strong>The Result:</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
              <li>✓ All key customer relationships preserved</li>
              <li>✓ New owner maintained 100% of revenue in year one</li>
              <li>✓ Owner confidence in transition increased dramatically</li>
              <li>✓ Smooth handoff with minimal disruption</li>
            </ul>
          </div>
        </div>

        <!-- Key Benefits for Owners -->
        <div style="background-color: #FFF8F0; border: 1px solid #E8D4C4; padding: 20px; border-radius: 6px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #B8956A; font-size: 16px;">Why Business Owners Choose Succession</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
            <li style="margin: 8px 0; color: #555;">✓ Capture 30 years of knowledge in 5 conversations</li>
            <li style="margin: 8px 0; color: #555;">✓ Increase buyer confidence and purchase price</li>
            <li style="margin: 8px 0; color: #555;">✓ Preserve customer and supplier relationships</li>
            <li style="margin: 8px 0; color: #555;">✓ Ensure smooth transition and business continuity</li>
            <li style="margin: 8px 0; color: #555;">✓ Reduce post-closing disputes and surprises</li>
            <li style="margin: 8px 0; color: #555;">✓ Leave a legacy of documented excellence</li>
          </ul>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 25px 0;">
          <p style="font-size: 15px; margin-bottom: 15px; color: #555;">
            Ready to capture your business knowledge and secure your transition?
          </p>
          <a href="https://succession.io" style="display: inline-block; background-color: #B8956A; color: white; padding: 14px 35px; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 15px;">
            Start Your Free Trial
          </a>
        </div>

        <!-- Closing -->
        <p style="font-size: 14px; margin-top: 25px; color: #666;">
          If you have any questions or would like to learn more about how Succession can help with your specific situation, just reply to this email or call us at <a href="tel:+18329906378" style="color: #B8956A; text-decoration: none;"><strong>1 (832) 990-6378</strong></a>.
        </p>

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
  `;
}

function getOwnerFollowUpEmailText(name: string): string {
  return `
Hi ${name},

We hope you're having a great day! We wanted to follow up on your inquiry and share inspiring stories from business owners who have successfully captured their knowledge and achieved smooth, profitable transitions.

HOW BUSINESS OWNERS ARE SECURING THEIR LEGACY
==============================================

💼 Service Business Owner: Clean Transition, Full Price
Challenge: 25-year HVAC business owner had all knowledge in their head. Buyer was nervous about losing customers.
Solution: Completed 5 guided Succession interviews capturing everything about running the business.
Result:
✓ Buyer confidence increased 40%
✓ Deal closed at full asking price (vs typical 5-10% discount)
✓ Zero post-closing disputes
✓ 95% customer retention in first year

🎯 Retail Store Owner: Premium Valuation Through Documentation
Challenge: Retail boutique competing with dozens of similar listings. Initial offers 20% below expectations.
Solution: Created professional handover document showcasing supplier relationships and strategies.
Result:
✓ Listing received 5x more inquiries
✓ Business sold for 15% above asking price
✓ Multiple offers created competitive bidding
✓ Buyer ready to implement documented strategies immediately

🏭 Manufacturing Owner: Smooth Transition, Preserved Relationships
Challenge: 30-year manufacturing business with deep customer and supplier relationships at risk.
Solution: Documented all relationships, processes, and standards through Succession interviews.
Result:
✓ All key customer relationships preserved
✓ New owner maintained 100% of revenue in year one
✓ Smooth handoff with minimal disruption
✓ Owner confidence in transition increased dramatically

WHY BUSINESS OWNERS CHOOSE SUCCESSION
======================================
✓ Capture 30 years of knowledge in 5 conversations
✓ Increase buyer confidence and purchase price
✓ Preserve customer and supplier relationships
✓ Ensure smooth transition and business continuity
✓ Reduce post-closing disputes and surprises
✓ Leave a legacy of documented excellence

Ready to capture your business knowledge and secure your transition?

Visit: https://succession.io

If you have any questions or would like to learn more, just reply to this email or call us at 1 (832) 990-6378.

Best regards,
The Succession Team

Succession - Capture Your Business Knowledge
https://succession.io
  `;
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

export function getFollowUpEmailHTML(name: string, inquiryType: string): string {
  // Demo requests are assumed to be from brokers
  if (inquiryType === 'demo') {
    return getBrokerFollowUpEmailHTML(name);
  }
  // All other inquiry types are treated as business owners
  return getOwnerFollowUpEmailHTML(name);
}

export function getFollowUpEmailText(name: string, inquiryType: string): string {
  // Demo requests are assumed to be from brokers
  if (inquiryType === 'demo') {
    return getBrokerFollowUpEmailText(name);
  }
  // All other inquiry types are treated as business owners
  return getOwnerFollowUpEmailText(name);
}
