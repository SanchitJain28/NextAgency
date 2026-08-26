"use client";

import { useState, useEffect } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useContact, useGeo } from "@/hooks";
import { ContactFormData } from "@/types/contact";

interface FormData extends ContactFormData {
  countryCode: string;
  phone: string;
}

const COUNTRY_CODES = [
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+1", name: "US/Canada", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+86", name: "China", flag: "🇨🇳" },
];

export function ContactForm() {
  const { isIndia, defaultCountryCode } = useGeo();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      countryCode: defaultCountryCode,
    }));
  }, [defaultCountryCode]);

  const { submitContact, isSubmitting, status, error } = useContact();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleanedValue = value.replace(/[^\d\s\-()]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: cleanedValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitContact(formData);
      setFormData({
        name: "",
        email: "",
        countryCode: "+1",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch {}
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
          >
            Full Name <span className="text-[var(--sf-primary)]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium placeholder:text-[var(--sf-ink-mute)]"
            placeholder="e.g. Alex Morgan"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
          >
            Email Address <span className="text-[var(--sf-primary)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium placeholder:text-[var(--sf-ink-mute)]"
            placeholder="alex@brand.com"
            title="Please enter a valid email address"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
        >
          Phone / WhatsApp Number
        </label>
        <div className="flex gap-2.5">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-32 px-3 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium cursor-pointer"
          >
            {COUNTRY_CODES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[\d\s\-()]+"
            minLength={10}
            maxLength={15}
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium placeholder:text-[var(--sf-ink-mute)]"
            placeholder="98765 43210"
            title="Please enter a valid phone number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
        >
          Company or Store Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium placeholder:text-[var(--sf-ink-mute)]"
          placeholder="e.g. Maison Luxe Apparel"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="projectType"
            className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
          >
            Project Type <span className="text-[var(--sf-primary)]">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="custom-app">Custom Shopify App</option>
            <option value="headless-commerce">
              Headless Commerce (Next.js)
            </option>
            <option value="theme-development">Custom Theme Development</option>
            <option value="performance-optimization">
              Speed &amp; Core Web Vitals
            </option>
            <option value="conversion-optimization">
              CRO &amp; Sales Funnel
            </option>
            <option value="shopify-plus-migration">
              Shopify Plus Migration
            </option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="integration">
              Third-Party ERP / CRM Integration
            </option>
            <option value="consulting">
              Full Store Audit &amp; Consulting
            </option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
          >
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium cursor-pointer"
          >
            <option value="">Select budget range</option>
            {(isIndia
              ? [
                  "Under ₹25,000",
                  "₹25,000 - ₹50,000",
                  "₹50,000 - ₹1,00,000",
                  "₹1,00,000+",
                  "Flexible / Not sure yet",
                ]
              : [
                  "Under $5,00",
                  "$500 - $1000",
                  "$1000 - $2500",
                  "$2500 - $5000",
                  "$5000+",
                  "Flexible / Not sure yet",
                ]
            ).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--sf-ink)] mb-2"
        >
          Project Details <span className="text-[var(--sf-primary)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3.5 bg-[var(--sf-paper)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] focus:outline-none focus:border-[var(--sf-primary)] focus:shadow-[4px_4px_0_var(--sf-primary)] transition-all font-medium placeholder:text-[var(--sf-ink-mute)] resize-none"
          placeholder="Tell us about your brand, current bottlenecks, desired timeline, or features you'd like to build..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-bold text-[16px] leading-none border-2 border-[var(--sf-ink)] shadow-[5px_5px_0_var(--sf-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--sf-ink)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Sending Proposal Request...</span>
            </>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="p-5 bg-[var(--sf-sage-soft)] border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-[var(--sf-sage)] shrink-0 mt-0.5" />
          <div>
            <h4
              className="text-[16px] font-bold text-[var(--sf-ink)] mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Inquiry Sent Successfully!
            </h4>
            <p className="text-[14px] text-[var(--sf-ink-soft)] leading-relaxed">
              Thank you! We&apos;ve sent a confirmation to your email and our
              team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-5 bg-[var(--sf-primary-soft)] border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-[var(--sf-primary-deep)] shrink-0 mt-0.5" />
          <div>
            <h4
              className="text-[16px] font-bold text-[var(--sf-ink)] mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Submission Failed
            </h4>
            <p className="text-[14px] text-[var(--sf-ink-soft)] leading-relaxed">
              {error ||
                "Something went wrong while sending your message. Please try again or reach us at hello@scalefront.io"}
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
