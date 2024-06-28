import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;
 
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:true,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email enviado com sucesso');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Erro ao enviar o email');
  }
}
