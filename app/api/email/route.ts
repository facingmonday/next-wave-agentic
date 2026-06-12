import Airtable from "airtable";
import { NextResponse } from "next/server";

type ContactEmailRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function getConsultationTable() {
  const apiKey = process.env.AIRTABLE_API_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_CONSULTATION_TABLE_ID;
  if (!apiKey || !baseId || !tableId) {
    return null;
  }
  return new Airtable({ apiKey }).base(baseId)(tableId);
}

function basicEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(request: Request) {
  let body: ContactEmailRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
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

  const table = getConsultationTable();
  if (!table) {
    return NextResponse.json(
      { error: "Consultation requests are not configured" },
      { status: 503 },
    );
  }

  const fields = {
    Name: name || "Not provided",
    Message: message,
    Email: email,
    Phone: phone,
  };

  try {
    await table.create([{ fields }]);

    return NextResponse.json({ success: true, message: "Requested Consultation" });
  } catch (error) {
    console.error("Airtable error:", error);
    return NextResponse.json(
      { error: "Failed to save consultation request" },
      { status: 500 },
    );
  }
}
