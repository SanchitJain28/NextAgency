import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createContact } from "@/lib/db";
import {
  generateAdminLeadEmail,
  generateVisitorConfirmationEmail,
} from "@/lib/email/contactEmailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const contact = await createContact({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    });

    if (process.env.RESEND_API_KEY) {
      try {
        const senderFrom =
          process.env.EMAIL_FROM || "ScaleFront <contact@scalefront.io>";
        const adminTo =
          process.env.CONTACT_NOTIFICATION_EMAIL || "mythichuman28@gmail.com";
        const appUrl =
          process.env.NEXT_PUBLIC_APP_URL || "https://scalefront.io";

        const formData = {
          name,
          email,
          phone,
          company,
          projectType,
          budget,
          message,
        };

        await Promise.allSettled([
          resend.emails.send({
            from: senderFrom,
            to: [adminTo],
            replyTo: email,
            subject: `New Lead: ${name} (${company || "No company"}) - ${projectType || "General Inquiry"}`,
            text: `New Lead Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nProject Type: ${projectType || "N/A"}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message}`,
            html: generateAdminLeadEmail(formData),
          }),

          resend.emails.send({
            from: senderFrom,
            to: [email],
            subject: `We received your inquiry, ${name} – ScaleFront`,
            text: `Hi ${name},\n\nThank you for reaching out to ScaleFront! We have received your inquiry regarding ${projectType || "your project"} and our team is already reviewing the details.\n\nWe typically respond within 24 hours.\n\nYour message summary:\n- Project Type: ${projectType || "General Inquiry"}\n- Company: ${company || "N/A"}\n- Budget: ${budget || "N/A"}\n\nBest regards,\nThe ScaleFront Team\nhttps://scalefront.io`,
            html: generateVisitorConfirmationEmail(formData, appUrl),
          }),
        ]);
      } catch (emailError) {
        console.error("[Email Notification Failed]:", emailError);
      }
    }

    return NextResponse.json(
      { success: true, id: contact.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Failed to process contact submission." },
      { status: 500 },
    );
  }
}
