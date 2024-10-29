// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure your email transport options
const transporter = nodemailer.createTransport({
  service: "gmail", // or another service like SendGrid, Mailgun, etc.
  auth: {
    user: "",
    pass: "yuua hrzz wuqb ybae.", // You might need an app-specific password
  },
});

app.post("/send-email", (req, res) => {
    const { to, subject, text } = req.body;
  
    const mailOptions = {
      from: "thekillscookiemancarit@gmail.com",
      to: to,
      subject: subject,
      text: text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: error.toString() });
      }
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    });
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
