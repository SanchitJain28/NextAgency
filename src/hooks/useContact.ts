"use client";

import { ContactFormData, ContactResponse } from "@/types/contact";
import { useState, useCallback } from "react";

import { CONTACT_INFO } from "@/config/contact";
export { CONTACT_INFO, type ContactInfo } from "@/config/contact";

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
    ...CONTACT_INFO,
    contactInfo: CONTACT_INFO,
  };
}
