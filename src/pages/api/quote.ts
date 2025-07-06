// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Only POST requests allowed' });
//   }
  
//   console.log('Incoming request:', req.body);

//   const {
//     firstName,
//     lastName,
//     email,
//     phone,
//     date,
//     participants,
//     activity,
//     details,
//     formSource
//   } = req.body;

//   // Optional: Basic validation
//     if (!firstName || !email || !phone) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//   // TODO: Save to MongoDB or send email here
//   console.log('Quote received:', {
//     firstName,
//     lastName,
//     email,
//     phone,
//     date,
//     participants,
//     activity,
//     details,
//     formSource
//   });

//   return res.status(200).json({ success: true, message: 'Quote received!' });
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    date,
    participants,
    activity,
    details,
    formSource,
  } = req.body;

  if (!firstName || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DBName); // Name of your DB
    const collection = db.collection(process.env.QuoteTable as string); // Name of your collection

    const newQuote = {
      firstName,
      lastName,
      email,
      phone,
      date,
      participants,
      activity,
      details,
      formSource,
      submittedAt: new Date(),
    };

    const result = await collection.insertOne(newQuote);

    console.log('Quote saved to DB:', result.insertedId);
    // ✅ Send email after DB insert
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: 'New Quote Request from Ultimate Mumbai',
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Participants:</strong> ${participants}</p>
        <p><strong>Activity:</strong> ${activity}</p>
        <p><strong>Details:</strong> ${details}</p>
        <p><strong>Source:</strong> ${formSource}</p>
      `,
    });

    console.log('Email sent successfully');
    return res.status(200).json({ success: true, message: 'Quote received!' });

  } catch (error) {
    console.error('DB save error:', error);
    return res.status(500).json({ error: 'Error saving quote' });
  }

}
