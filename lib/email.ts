import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
})

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    console.log('Attempting to send email with config:', {
      host: 'smtp.gmail.com',
      port: 587,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS
    })
    
    // Verify connection configuration
    await transporter.verify()
    console.log('SMTP connection verified successfully')

    // Email content
    const mailOptions = {
      from: `"${data.firstName} ${data.lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'elitecyclehomeslimited@gmail.com',
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Elite Cycle Homes Website Contact Form</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
Source: Elite Cycle Homes Website Contact Form
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
