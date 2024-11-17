import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// import { config } from 'dotenv';
// config();
// console.log('Loaded Variables:', process.env);

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

console.log(fromEmail);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    console.log(fromEmail);
    const data = await resend.emails.send({
      from: 'noreply@gharbi.com',
      to: 'ahmedgharbigharbi718@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
