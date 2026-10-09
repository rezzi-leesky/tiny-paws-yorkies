import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, puppyName, puppyId } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to breeder
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@tinypawsyorkies.com",
      to: process.env.BREEDER_EMAIL || "info@tinypawsyorkies.com",
      subject: `New Inquiry: ${puppyName} (ID: ${puppyId})`,
      html: `
        <h2>New Puppy Inquiry</h2>
        <p><strong>Puppy:</strong> ${puppyName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    });

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@tinypawsyorkies.com",
      to: email,
      subject: `We received your inquiry about ${puppyName}!
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${name},</p>
        <p>We've received your inquiry about <strong>${puppyName}</strong> and will be in touch within 24 hours.</p>
        <p>Best regards,<br/>Tiny Paws Yorkies Team</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
