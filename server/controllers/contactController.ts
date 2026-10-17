import { Request, Response } from "express";
import Contact from "../models/Contact";

// CONTROLLER TO SUBMIT THE CONTACT FORM ---> POST REQUEST
const submitContact = async (req: Request, res: Response): Promise<void> => {
  const { name, email, subject, message } = req.body;

  //   1. Every field is required
  if (!name || !email || !subject || !message) {
    res.status(400).json({ message: "Please fill out all fields" });
    return;
  }

  try {
    // 2. Save the contact details in the database
    await Contact.create({ name, email, subject, message });

    res.status(201).json({ message: "Submitted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default submitContact;
