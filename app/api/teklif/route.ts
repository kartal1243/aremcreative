import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").slice(0, 100).trim();
    const contactInfo = String(body.contact ?? "").slice(0, 100).trim();
    const service = String(body.service ?? "").slice(0, 100).trim();
    const message = String(body.message ?? "").slice(0, 2000).trim();

    if (!name || !contactInfo) {
      return NextResponse.json({ ok: false, error: "Ad ve iletişim zorunlu." }, { status: 400 });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.LEAD_TO ?? "hello@aremcreative.com.tr";

    if (!user || !pass) {
      console.error("teklif: GMAIL_USER / GMAIL_APP_PASSWORD yok");
      return NextResponse.json({ ok: false, error: "Mail servisi kurulmadı." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Arem Site" <${user}>`,
      to,
      replyTo: contactInfo.includes("@") ? contactInfo : undefined,
      subject: `Yeni teklif: ${name} — ${service || "genel"}`,
      text: `Ad: ${name}\nİletişim: ${contactInfo}\nHizmet: ${service}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("teklif hatası:", e);
    return NextResponse.json({ ok: false, error: "Gönderilemedi." }, { status: 500 });
  }
}
