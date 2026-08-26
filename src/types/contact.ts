export interface CreateContactInput {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  projectType?: string | null;
  budget?: string | null;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  countryCode?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export interface ContactResponse {
  success?: boolean;
  id?: string;
  error?: string;
}
