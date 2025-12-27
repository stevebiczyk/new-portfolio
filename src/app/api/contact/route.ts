import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot field
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return new Response(
        JSON.stringify({
          ok: false,
          error:
            "Server email configuration missing (RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL).",
        }),
        { status: 500 }
      );
    }

    const body = (await req.json()) as Payload;

    // Simple honeypot check
    if (body.website && body.website.trim().length > 0) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Validate required fields
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields." }),
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email address." }),
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio inquiry — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to send message." }),
      { status: 500 }
    );
  }
}
