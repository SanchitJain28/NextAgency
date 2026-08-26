import { ContactFormData } from "@/types/contact";

const SF = {
  primary: "#D9481F",
  primaryDeep: "#B4370F",
  primarySoft: "#FBDDD1",
  ink: "#181310",
  inkSoft: "#4A413A",
  inkMute: "#8A7E72",
  paper: "#FFFFFF",
  paperSunken: "#F4F0E8",
  sage: "#4C6B49",
  sageSoft: "#DCE7D5",
  gold: "#E39A16",
  goldSoft: "#F8E6BC",
  fontDisplay:
    "'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontBody:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontMono:
    "'JetBrains Mono', Menlo, Monaco, Consolas, 'Courier New', monospace",
};

export function generateAdminLeadEmail(data: ContactFormData): string {
  const { name, email, phone, company, projectType, budget, message } = data;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead: ${name}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: ${SF.fontBody}; color: ${SF.ink}; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF8F5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: ${SF.paper}; border: 2px solid ${SF.ink}; border-radius: 12px; box-shadow: 6px 6px 0px ${SF.ink}; overflow: hidden;">
          
          <!-- Top Header Strip -->
          <tr>
            <td style="background-color: ${SF.paperSunken}; border-bottom: 2px solid ${SF.ink}; padding: 20px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="font-family: ${SF.fontDisplay}; font-size: 22px; font-weight: 800; color: ${SF.ink}; letter-spacing: -0.5px;">
                      Scale<span style="color: ${SF.primary};">Front</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; font-family: ${SF.fontMono}; font-size: 11px; font-weight: 700; text-transform: uppercase; background-color: ${SF.primarySoft}; color: ${SF.primaryDeep}; border: 1.5px solid ${SF.ink}; border-radius: 999px; padding: 4px 10px; box-shadow: 2px 2px 0px ${SF.ink};">
                      ● New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px 28px 20px;">
              
              <!-- Eyebrow & Headline -->
              <div style="font-family: ${SF.fontMono}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: ${SF.primary}; margin-bottom: 6px;">
                01 // INCOMING CLIENT INQUIRY
              </div>
              <h1 style="font-family: ${SF.fontDisplay}; font-size: 26px; font-weight: 800; line-height: 1.15; color: ${SF.ink}; margin: 0 0 20px 0; letter-spacing: -0.5px;">
                ${name} has requested a proposal
              </h1>

              <!-- Key Lead Details Grid -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px; border-collapse: separate; border-spacing: 0 10px;">
                
                <!-- Email & Phone -->
                <tr>
                  <td style="background-color: ${SF.paperSunken}; border: 2px solid ${SF.ink}; border-radius: 8px; padding: 14px 16px; box-shadow: 3px 3px 0px ${SF.ink};">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="50%" style="vertical-align: top; padding-right: 10px;">
                          <div style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600; margin-bottom: 3px;">Email Address</div>
                          <div style="font-size: 14px; font-weight: 700; color: ${SF.ink}; word-break: break-all;">
                            <a href="mailto:${email}" style="color: ${SF.primary}; text-decoration: none;">${email}</a>
                          </div>
                        </td>
                        <td width="50%" style="vertical-align: top; padding-left: 10px; border-left: 1.5px dashed ${SF.inkMute};">
                          <div style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600; margin-bottom: 3px;">Phone</div>
                          <div style="font-size: 14px; font-weight: 700; color: ${SF.ink};">
                            ${phone || "<span style='color: " + SF.inkMute + "; font-weight: 400;'>Not provided</span>"}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Company & Service -->
                <tr>
                  <td style="background-color: ${SF.paperSunken}; border: 2px solid ${SF.ink}; border-radius: 8px; padding: 14px 16px; box-shadow: 3px 3px 0px ${SF.ink};">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="50%" style="vertical-align: top; padding-right: 10px;">
                          <div style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600; margin-bottom: 3px;">Company / Store</div>
                          <div style="font-size: 14px; font-weight: 700; color: ${SF.ink};">
                            ${company || "<span style='color: " + SF.inkMute + "; font-weight: 400;'>N/A</span>"}
                          </div>
                        </td>
                        <td width="50%" style="vertical-align: top; padding-left: 10px; border-left: 1.5px dashed ${SF.inkMute};">
                          <div style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600; margin-bottom: 3px;">Project Type</div>
                          <div style="font-size: 14px; font-weight: 700; color: ${SF.ink};">
                            ${projectType || "General Inquiry"}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Budget -->
                <tr>
                  <td style="background-color: ${SF.goldSoft}; border: 2px solid ${SF.ink}; border-radius: 8px; padding: 14px 16px; box-shadow: 3px 3px 0px ${SF.ink};">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td>
                          <div style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkSoft}; font-weight: 600; margin-bottom: 2px;">Estimated Budget</div>
                          <div style="font-size: 16px; font-weight: 800; color: ${SF.ink};">
                            💰 ${budget || "Not specified"}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

              <!-- Project Message Box -->
              <div style="font-family: ${SF.fontMono}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: ${SF.inkSoft}; margin-bottom: 8px;">
                PROJECT DETAILS &amp; MESSAGE
              </div>
              <div style="background-color: ${SF.paperSunken}; border: 2px solid ${SF.ink}; border-radius: 8px; padding: 18px 20px; box-shadow: 4px 4px 0px ${SF.ink}; margin-bottom: 28px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: ${SF.inkSoft}; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- Quick Reply Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 12px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re:%20ScaleFront%20Inquiry%20-%20${encodeURIComponent(name)}"
                       style="display: inline-block; background-color: ${SF.primary}; color: #FFFFFF; font-family: ${SF.fontDisplay}; font-size: 15px; font-weight: 700; text-decoration: none; padding: 14px 32px; border: 2px solid ${SF.ink}; border-radius: 8px; box-shadow: 4px 4px 0px ${SF.ink};">
                      Reply Directly to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Strip -->
          <tr>
            <td style="background-color: ${SF.ink}; padding: 16px 28px; text-align: center;">
              <span style="font-family: ${SF.fontMono}; font-size: 11px; color: #FAF8F5; opacity: 0.85;">
                Logged at ${timestamp} UTC &bull; ScaleFront CRM System
              </span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function generateVisitorConfirmationEmail(
  data: ContactFormData,
  appUrl = "https://scalefront.io",
): string {
  const { name, company, projectType, budget } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We received your inquiry – ScaleFront</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: ${SF.fontBody}; color: ${SF.ink}; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF8F5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: ${SF.paper}; border: 2px solid ${SF.ink}; border-radius: 12px; box-shadow: 6px 6px 0px ${SF.ink}; overflow: hidden;">
          
          <!-- Top Header Strip -->
          <tr>
            <td style="background-color: ${SF.paperSunken}; border-bottom: 2px solid ${SF.ink}; padding: 22px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="font-family: ${SF.fontDisplay}; font-size: 22px; font-weight: 800; color: ${SF.ink}; letter-spacing: -0.5px;">
                      Scale<span style="color: ${SF.primary};">Front</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; font-family: ${SF.fontMono}; font-size: 11px; font-weight: 700; text-transform: uppercase; background-color: ${SF.sageSoft}; color: ${SF.sage}; border: 1.5px solid ${SF.ink}; border-radius: 999px; padding: 4px 10px; box-shadow: 2px 2px 0px ${SF.ink};">
                      ✓ Inquiry Received
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 36px 28px 24px;">
              
              <!-- Greeting & Headline -->
              <div style="font-family: ${SF.fontMono}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: ${SF.primary}; margin-bottom: 6px;">
                CONFIRMATION &amp; NEXT STEPS
              </div>
              <h1 style="font-family: ${SF.fontDisplay}; font-size: 28px; font-weight: 800; line-height: 1.15; color: ${SF.ink}; margin: 0 0 16px 0; letter-spacing: -0.5px;">
                Thanks for reaching out, ${name}!
              </h1>
              
              <p style="font-size: 16px; line-height: 1.6; color: ${SF.inkSoft}; margin: 0 0 20px 0;">
                We've safely received your inquiry. Our engineering and design team is reviewing your project details right now.
              </p>

              <!-- SLA / Response Timeline Badge Card -->
              <div style="background-color: ${SF.primarySoft}; border: 2px solid ${SF.ink}; border-radius: 8px; padding: 14px 18px; box-shadow: 4px 4px 0px ${SF.ink}; margin-bottom: 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td width="30" style="vertical-align: middle; font-size: 20px;">⚡</td>
                    <td style="vertical-align: middle; font-size: 14px; font-weight: 700; color: ${SF.ink};">
                      Guaranteed Response: <span style="color: ${SF.primaryDeep};">Within 24 hours</span> (usually within 2-4 hours).
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Submission Recap Card -->
              <div style="font-family: ${SF.fontMono}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: ${SF.inkSoft}; margin-bottom: 8px;">
                YOUR INQUIRY SUMMARY
              </div>
              <div style="background-color: ${SF.paperSunken}; border: 2px solid ${SF.ink}; border-radius: 8px; padding: 18px 20px; box-shadow: 4px 4px 0px ${SF.ink}; margin-bottom: 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding-bottom: 8px;">
                      <span style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600;">Service Requested:</span>
                      <div style="font-size: 15px; font-weight: 700; color: ${SF.ink}; margin-top: 2px;">
                        ${projectType || "General Development"}
                      </div>
                    </td>
                  </tr>
                  ${
                    company
                      ? `
                  <tr>
                    <td style="padding-bottom: 8px; border-top: 1px solid #E5DFD5; padding-top: 8px;">
                      <span style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600;">Company / Store:</span>
                      <div style="font-size: 15px; font-weight: 700; color: ${SF.ink}; margin-top: 2px;">
                        ${company}
                      </div>
                    </td>
                  </tr>`
                      : ""
                  }
                  ${
                    budget
                      ? `
                  <tr>
                    <td style="border-top: 1px solid #E5DFD5; padding-top: 8px;">
                      <span style="font-family: ${SF.fontMono}; font-size: 11px; text-transform: uppercase; color: ${SF.inkMute}; font-weight: 600;">Budget Range:</span>
                      <div style="font-size: 15px; font-weight: 700; color: ${SF.ink}; margin-top: 2px;">
                        ${budget}
                      </div>
                    </td>
                  </tr>`
                      : ""
                  }
                </table>
              </div>

              <!-- Case Studies CTA -->
              <p style="font-size: 15px; line-height: 1.5; color: ${SF.inkSoft}; margin: 0 0 20px 0;">
                While we prepare your response, explore some of our recent high-growth Shopify and full-stack builds:
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 12px;">
                <tr>
                  <td align="center">
                    <a href="${appUrl}/work"
                       style="display: inline-block; background-color: ${SF.primary}; color: #FFFFFF; font-family: ${SF.fontDisplay}; font-size: 15px; font-weight: 700; text-decoration: none; padding: 14px 32px; border: 2px solid ${SF.ink}; border-radius: 8px; box-shadow: 4px 4px 0px ${SF.ink};">
                      Explore Case Studies &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Strip -->
          <tr>
            <td style="background-color: ${SF.ink}; padding: 24px 28px; text-align: center;">
              <p style="font-family: ${SF.fontDisplay}; font-size: 15px; font-weight: 700; color: #FFFFFF; margin: 0 0 6px 0;">
                ScaleFront
              </p>
              <p style="font-family: ${SF.fontBody}; font-size: 13px; color: ${SF.inkMute}; margin: 0 0 12px 0;">
                High-Performance Shopify &amp; Full-Stack Web Development
              </p>
              <p style="font-family: ${SF.fontMono}; font-size: 11px; color: #FAF8F5; opacity: 0.6; margin: 0;">
                Have urgent questions? Email us directly at <a href="mailto:hello@scalefront.io" style="color: ${SF.primarySoft}; text-decoration: underline;">hello@scalefront.io</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
