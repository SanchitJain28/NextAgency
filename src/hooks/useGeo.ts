"use client";

import { GeoInfo } from "@/types/geo";
import { useState, useEffect } from "react";

export function useGeo(): GeoInfo {
  const [country, setCountry] = useState<string>("IN");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const paramCountry = urlParams.get("country")?.toUpperCase();
      if (paramCountry) {
        setCountry(paramCountry);
        document.cookie = `user-country=${paramCountry}; path=/; max-age=2592000`;
        return;
      }

      const cookieMatch = document.cookie.match(/user-country=([A-Za-z]{2})/);
      if (cookieMatch) {
        setCountry(cookieMatch[1].toUpperCase());
        return;
      }

      try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (
          timeZone.includes("Calcutta") ||
          timeZone.includes("Kolkata") ||
          timeZone.includes("Asia/Colombo") ||
          navigator.language === "en-IN"
        ) {
          setCountry("IN");
        } else {
          setCountry("US");
        }
      } catch {
        setCountry("IN");
      }
    }
  }, []);

  const isIndia = country === "IN";

  const setManualCountry = (newCountry: "IN" | "US") => {
    setCountry(newCountry);
    if (typeof document !== "undefined") {
      document.cookie = `user-country=${newCountry}; path=/; max-age=2592000`;
    }
  };

  return {
    isIndia,
    country,
    currency: isIndia ? "INR" : "USD",
    currencySymbol: isIndia ? "₹" : "$",
    defaultCountryCode: isIndia ? "+91" : "+1",
    setManualCountry,
  };
}
