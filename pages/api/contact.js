import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update your SendGrid API key here
    api_key:
      "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",
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  // console.log(req.body)
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email here
    to: "info@smilemealigners.com",
    from: email,
    subject: "Hi there",
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
