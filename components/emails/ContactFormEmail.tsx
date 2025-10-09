import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactFormEmail({ name, email, subject, message }: ContactFormEmailProps) {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#C9A063' }}>New Contact Form Submission</h2>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '5px', margin: '20px 0' }}>
        <p><strong>From:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject}</p>
      </div>
      <div style={{ padding: '20px', background: 'white', borderLeft: '4px solid #C9A063' }}>
        <h3>Message:</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
    </div>
  );
}
