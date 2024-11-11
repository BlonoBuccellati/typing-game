import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function POST(req: NextRequest) {
  try {
    const content = await req.json();
    const newData = await prisma.testUser.create({
      data: {
        name: content.name,
      },
    });
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

export async function GET() {
  const data = await prisma.testUser.findMany();
  return Response.json(data);
}
