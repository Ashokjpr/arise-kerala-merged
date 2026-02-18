import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  senderName: z.string().min(2),
  senderEmail: z.string().email(),
  messageContent: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const data = contactSchema.parse(body);

    // 🔥 For now just log (replace with email / DB later)
    console.log('New contact message:', data);

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: 'Invalid request',
        error: error?.errors ?? error?.message,
      },
      { status: 400 }
    );
  }
}
