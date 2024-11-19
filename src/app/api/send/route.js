import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  const { email, subject, message } = await request.json();

  if (!email || !message) {
    return new Response(
      JSON.stringify({ error: 'Email and message are required' }),
      {
        status: 400,
      }
    );
  }

  // Log the data (for demonstration)
  console.log({ email, subject, message });

  // Return success response
  return new Response(
    JSON.stringify({ message: 'Message sent successfully!' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
