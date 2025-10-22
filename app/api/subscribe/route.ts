import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    // Validate inputs
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service provider
    // For now, we'll just log it (you'll replace this with actual service)
    console.log('Newsletter signup:', { name, email, date: new Date().toISOString() });

    // Example: Mailchimp integration would go here
    // const mailchimpResponse = await fetch('https://api.mailchimp.com/3.0/lists/...')

    // Example: Resend integration would go here
    // await resend.contacts.create({ email, firstName: name })

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
