import { apiUrl } from "@/lib/api";

export type InquiryType =
  | "Custom Fabric Development"
  | "Bulk Fabric Sourcing"
  | "Digital Printing Inquiry"
  | "Sample Yardage Request"
  | "Design Studio Quote"
  | "Custom Quote Request"
  | "Other";

export interface InquiryPayload {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  inquirytype: InquiryType | string;
  message: string;
  image?: string;
  designId?: string;
  designTitle?: string;
  quantity?: string;
  notes?: string;
  fabricType?: string;
  productCategory?: string;
  fabricGSM?: string;
  deliveryTimeline?: string;
}

export async function uploadInquiryFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(apiUrl("upload"), {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      (data as { message?: string }).message || "Could not upload your file."
    );
  }

  const data = (await res.json()) as { url?: string };
  if (!data.url) {
    throw new Error("Upload succeeded but no file URL was returned.");
  }
  return data.url;
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
