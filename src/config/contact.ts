// Single source of public contact details, usable by server and client code.
const phoneE164 = "919650296375";
const waBase = `https://wa.me/${phoneE164}`;

export const CONTACT_INFO = {
  phoneE164,
  displayPhone: "+91-965-029-6375",
  telInternational: `+${phoneE164}`,
  email: "sanchit@scalefront.io",
  companyLinkedin: "https://linkedin.com/company/scalefront",
  twitter: "https://twitter.com/scalefront",
  github: "https://github.com/scalefront",
  instagram: "https://instagram.com/scalefront",
  contactSenderEmail: "contact@scalefront.io",
  auditSenderEmail: "audit@scalefront.io",
  supportEmail: "support@scalefront.io",
  linkedin: "https://www.linkedin.com/in/sanchitjain28/",
  waBase,
  waPrefilled: `${waBase}?text=${encodeURIComponent(
    "Hi ScaleFront team! I'd like to discuss a Shopify development project.",
  )}`,
} as const;

export type ContactInfo = typeof CONTACT_INFO;
