import mongoose = require("mongoose");

// 1. A typescript interface: describe what a contact message looks like.
export interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

// 2. A Mongosse schema: describes how a contact message is saved in MongoDB
const contactSchema = new mongoose.Schema<IContact>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 3. Export the Schema
const Contact = mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
