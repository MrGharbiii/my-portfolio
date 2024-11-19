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

  try {
    const response = await emailjs.send(
      'service_c3g1so7',
      'template_12345',
      { user_email: email, subject, message },
      'eStu4Qmry3z_Mtbr8LFht'
    );

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!', response }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
