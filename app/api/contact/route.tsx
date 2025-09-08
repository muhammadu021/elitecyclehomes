import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json()

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Send email using Nodemailer
    const result = await sendContactEmail({
      firstName,
      lastName,
      email,
      phone,
      message,
    })

    if (result.success) {
      console.log("Contact form submission sent successfully:", {
        firstName,
        lastName,
        email,
        phone,
        messageId: result.messageId,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
