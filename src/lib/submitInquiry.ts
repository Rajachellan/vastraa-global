import { apiUrl } from "@/lib/api";

export type InquiryType =
  | "Custom Fabric Development"
  | "Bulk Fabric Sourcing"
  | "Digital Printing Inquiry"
  | "Sample Yardage Request"
  | "Design Studio Quote"
  | "Other";

export interface InquiryPayload {
  fullName: string;
  companyName: string;
  email: string;
  inquirytype: InquiryType | string;
  message: string;
  image?: string;
  designId?: string;
  designTitle?: string;
  quantity?: string;
  notes?: string;
}

export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  const res = await fetch(apiUrl("form"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      (data as { message?: string }).message ||
        "Could not submit your inquiry. Please try again."
    );
  }
}
