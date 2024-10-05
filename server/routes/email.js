const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.google.com",
  port: 465,
  secure: true,
  auth: {
    user: "info.planetehotelrwanda@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

router.post("/message", async (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: "info.planetehotelrwanda@gmail.com",
      to: email,
      subject: "Message from Planetehotel",
      text: `Thank you ${firstname} ${lastname} for your message. We will get back to you shortly.`,
      html: `
        <h1>New message from ${firstname} ${lastname}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: email,
      to: "info.planetehotelrwanda@gmail.com",
      subject: `Message from ${firstname} ${lastname}`,
      text: `${message}`,
      html: `
        <h1>New message from ${firstname} ${lastname}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return res.status(200).json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});


