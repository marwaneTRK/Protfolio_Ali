"use server";

export type BookingState = {
  ok: boolean | null;
  message: string;
};

function field(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const honeypot = field(formData, "company");
  if (honeypot) {
    return { ok: true, message: "" };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const interest = field(formData, "interest");
  const message = field(formData, "message");

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in name, email, and your message." };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return {
      ok: false,
      message:
        "The booking form is not connected yet. Add WEB3FORMS_ACCESS_KEY to your environment, or email directly from the links in the footer.",
    };
  }

  const composed = [
    interest ? `Inquiry: ${interest}` : null,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const body = {
    access_key: accessKey,
    subject: `Booking request — ${name}`,
    name,
    email,
    message: composed,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (data.success) {
      return { ok: true, message: "Thank you — your request was sent." };
    }
    return {
      ok: false,
      message: data.message ?? "Something went wrong. Please try again shortly.",
    };
  } catch {
    return { ok: false, message: "Network error. Please try again." };
  }
}
