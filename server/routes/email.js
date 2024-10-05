const express = require("express");
const nodemailer = require("nodemailer");
const Message = require("../models/Message");
const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
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
    console.log(process.env.GMAIL_PASSWORD);
    await transporter.sendMail({
      from: "info.planetehotelrwanda@gmail.com",
      to: email,
      subject: "Message from Planetehotel",
      text: `${message}`,
      html: `
        <h1>Hello dear ${firstname} ${lastname}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Thank you for contacting us!</strong> <br>We will get back to you soon!</p>
        <code> <br><br> Planete Hotel Management Team </code>
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
    console.log("here");
    return res.status(500).json({ message: error.message, success: false });
  }
});

router.get("/", checkAuth, async (req, res) => {
  try {
    const messages = await Message.find();
    return res.status(200).json({ messages: messages, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router;
