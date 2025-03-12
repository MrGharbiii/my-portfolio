import emailjs from 'emailjs-com';

export async function POST(request) {
  const { email, subject, message } = await request.json();

  if (!email || !message) {
    return new Response(
      JSON.stringify({ error: 'Email and message are required' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
