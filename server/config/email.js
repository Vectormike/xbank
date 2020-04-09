import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import dotenv from "dotenv";
dotenv.config();

let transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID,
  })
);

export const sendEmail = {
  async sendEmail(from, to, subject, html) {
    const sMail = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
    return sMail;
  },
};
