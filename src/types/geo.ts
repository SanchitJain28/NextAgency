export interface GeoInfo {
  isIndia: boolean;
  country: string;
  currency: "INR" | "USD";
  currencySymbol: "₹" | "$";
  defaultCountryCode: "+91" | "+1";
  setManualCountry: (country: "IN" | "US") => void;
}
