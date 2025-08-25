
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    // Configure your transporter (use environment variables for real deployment)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

module.exports = router;
