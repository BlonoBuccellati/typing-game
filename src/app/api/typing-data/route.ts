import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function POST(req: NextRequest) {
  try {
    const content = await req.json();
    const newData = await prisma.testGameData.create({
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
  try {
    const data = await prisma.testGameData.findMany({
      select: {
        name: true,
      },
    });
    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
