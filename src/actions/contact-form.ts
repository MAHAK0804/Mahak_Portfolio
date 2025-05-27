'use server'

import { connectToDB } from '@/lib/mongodb'
import { ContactMessage } from '@/lib/models/ContactMessage'
import nodemailer from 'nodemailer'

const action = async (formData: FormData) => {
  try {
    const name = formData.get('name')?.toString()
    const email = formData.get('email')?.toString()
    const subject = formData.get('subject')?.toString()
    const message = formData.get('message')?.toString()

    if (!name || !email || !subject || !message) {
      return { success: false, message: 'All fields are required.' }
    }

    await connectToDB()

    await ContactMessage.create({
      name,
      email,
      subject,
      message,
    })

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Message: ${subject}`,
      text: `
${message}
Thanking You,
${name}
${email}
      `,
    }

    await transporter.sendMail(mailOptions)

    return { success: true, message: 'Your message has been saved and emailed successfully!' }
  } catch (error) {
    console.error('Error saving message or sending email:', error)
    return { success: false, message: 'Failed to save and email message. Please try again.' }
  }
}

export default action
