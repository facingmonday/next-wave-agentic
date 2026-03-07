import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

type ContactEmailRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function basicEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() ?? "");
}

export async function POST(request: Request) {
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.SENDGRID_TO_EMAIL;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const fromName = process.env.SENDGRID_FROM_NAME?.trim();

  if (!sendgridKey?.trim()) {
    return NextResponse.json(
      { error: "SENDGRID_API_KEY is not configured" },
      { status: 500 },
    );
  }
  if (!toEmail?.trim()) {
    return NextResponse.json(
      { error: "SENDGRID_TO_EMAIL is not configured" },
      { status: 500 },
    );
  }
  if (!fromEmail?.trim()) {
    return NextResponse.json(
      { error: "SENDGRID_FROM_EMAIL is not configured" },
      { status: 500 },
    );
  }

  let body: ContactEmailRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!email || !basicEmailFormat(email)) {
    return NextResponse.json(
      { error: "email is required and must be a valid email address" },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const fromLines: string[] = [];
  if (name) {
    fromLines.push(name);
  }
  if (phone) fromLines.push(phone);
  fromLines.push(email);

  const text = [
    "Next Wave Agentic – Contact Form Message",
    "",
    "--- Message ---",
    message,
    "",
    "--- Contact Details ---",
    ...fromLines,
  ].join("\n");

  sgMail.setApiKey(sendgridKey);

  const msg = {
    to: toEmail.trim(),
    from: fromName
      ? { email: fromEmail.trim(), name: fromName }
      : fromEmail.trim(),
    replyTo: email,
    subject: "Next Wave Agentic – Contact Form",
    text,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (e) {
    const err = e instanceof Error ? e.message : "Failed to send email";
    return NextResponse.json({ error: err }, { status: 502 });
  }
}
