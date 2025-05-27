import mongoose from 'mongoose'

const ContactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    isVisited: { type: Boolean },
  },
  { timestamps: true },
)

export const ContactMessage =
  mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactMessageSchema)
