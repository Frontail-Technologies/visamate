import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

export const mailOptions = {
  from: `"Visa Mate Website" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
};
