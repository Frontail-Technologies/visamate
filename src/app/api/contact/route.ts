import { NextResponse } from "next/server";
import { contactEmailTemplate } from "@/lib/email-template";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, serviceType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Use the exported transporter

    // Generate HTML email content
    const htmlContent = contactEmailTemplate({
      name,
      email,
      phone: phone || "Not provided",
      serviceType: serviceType || "General Inquiry",
      message,
    });

    // Send the email
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Consultation Request: ${serviceType || "General"} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Type: ${serviceType}\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
