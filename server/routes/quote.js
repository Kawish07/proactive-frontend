const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// POST /api/send-quote
router.post('/send-quote', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-gmail@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password',
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER || 'client-email@example.com',
    subject: 'New Quote Request',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Quote sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send quote.', error });
  }
});

module.exports = router;