import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { description, status, telegramUserId } = await req.json(); // Assuming telegramUserId is passed in the request

    const final = await prisma.issue.create({
      data: {
        description,
        status,
       
      },
    });

    return NextResponse.json({ final });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while creating the issue.' }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const issues = await prisma.issue.findMany(/* {
      include: {
        telegramUser: true, // Include related Telegram user if needed
    }}, */
    );

    return NextResponse.json({ issues });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching the issues.' }, { status: 500 });
  }
}