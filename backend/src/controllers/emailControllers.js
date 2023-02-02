const nodemailer = require("nodemailer");

const sendEmail = (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  const emailContent = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_FROM,
    subject: "test",
    text: "example",
    html: `<b>Contact me ${firstname} ${lastname} ${email} ${phone} ${message}</b>`,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.MAIL_FROM, pass: process.env.PASSWORD_FROM },
    secure: true,
  });

  transporter.sendMail(emailContent, (err, info) => {
    if (err) {
      res.status(200).send({ error: err });
    } else {
      res.status(200).send({ success: "good" });
    }
  });
};

module.exports = {
  sendEmail,
};
