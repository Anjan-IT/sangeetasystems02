import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Validate the email (you can add more validation here)
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Handle subscription logic here, e.g., save the email to a database
    // For demonstration, we'll just return a success response.
    return NextResponse.json(
      { message: 'Subscription successful!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error subscribing:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
