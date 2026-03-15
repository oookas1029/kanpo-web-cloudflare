export const onRequestPost: PagesFunction<{ RESEND_API_KEY: string }> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as { name: string; email: string; subject: string; message: string };

    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500 });
    }

    // Call Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Kampo Medicine Contact Form <onboarding@resend.dev>', // Resend's default onboarding domain
        to: ['oookas1029@gmail.com'], // Assuming this is the destination based on the repo name
        subject: `[Contact Form] ${body.subject} - from ${body.name}`,
        html: `
          <h3>New Inquiry from Kampo Medicine Website</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${body.message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend API error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
