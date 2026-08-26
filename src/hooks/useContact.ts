"use client";

import { ContactFormData, ContactResponse } from "@/types/contact";
import { useState, useCallback } from "react";

export const CONTACT_INFO = {
  phoneE164: "919650296375",
  displayPhone: "+91-965-029-6375",
  telInternational: "+919650296375",
  email: "hello@scalefront.io",
  linkedin: "https://www.linkedin.com/in/sanchitjain28/",
  waBase: "https://wa.me/919650296375",
  waPrefilled: `https://wa.me/919650296375?text=${encodeURIComponent(
    "Hi ScaleFront team! I'd like to discuss a Shopify development project.",
  )}`,
} as const;

export type ContactInfo = typeof CONTACT_INFO;

export interface UseContactOptions {
  onSuccess?: (data: ContactResponse) => void;
  onError?: (error: Error) => void;
}

export async function sendContactMessage(
  formData: ContactFormData,
): Promise<ContactResponse> {
  const fullPhone =
    formData.countryCode && formData.phone
      ? `${formData.countryCode} ${formData.phone}`
      : formData.phone || "";

  const payload = {
    ...formData,
    phone: fullPhone || undefined,
  };

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: ContactResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to submit contact message.");
  }

  return data;
}

export function useContact(options?: UseContactOptions) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ContactResponse | null>(null);

  const submitContact = useCallback(
    async (formData: ContactFormData) => {
      setStatus("loading");
      setError(null);

      try {
        const result = await sendContactMessage(formData);
        setData(result);
        setStatus("success");
        options?.onSuccess?.(result);
        return result;
      } catch (err: any) {
        const errorMessage =
          err?.message || "An unexpected error occurred. Please try again.";
        setError(errorMessage);
        setStatus("error");
        options?.onError?.(
          err instanceof Error ? err : new Error(errorMessage),
        );
        throw err;
      }
    },
    [options],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
    setData(null);
  }, []);

  return {
    submitContact,
    status,
    isSubmitting: status === "loading",
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
    error,
    data,
    reset,
    phoneE164: CONTACT_INFO.phoneE164,
    displayPhone: CONTACT_INFO.displayPhone,
    telInternational: CONTACT_INFO.telInternational,
    email: CONTACT_INFO.email,
    linkedin: CONTACT_INFO.linkedin,
    waBase: CONTACT_INFO.waBase,
    waPrefilled: CONTACT_INFO.waPrefilled,
    contactInfo: CONTACT_INFO,
  };
}
