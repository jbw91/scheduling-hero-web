export interface Email {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  html: string;
}
