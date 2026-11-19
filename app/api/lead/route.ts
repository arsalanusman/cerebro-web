import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot spam protection
    if (data.hp || data.website_hp) {
      // Silently accept spam bots without processing
      return NextResponse.json({ ok: true });
    }

    const { name, email, formType } = data;

    if (!name || !email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid name and email address." },
        { status: 400 }
      );
    }

    // Server-side logging for leads
    console.log(`[LEAD RECEIVED: ${formType || "general"}]`, {
      name,
      email,
      company: data.company,
      role: data.role,
      sources: data.sources,
      spend: data.spend,
      brands: data.brands,
      topic: data.topic,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: "Lead submitted successfully." });
  } catch (error) {
    console.error("[LEAD SUBMISSION ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process lead. Please try again." },
      { status: 500 }
    );
  }
}
