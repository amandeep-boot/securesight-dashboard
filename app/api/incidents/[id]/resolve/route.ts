import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const incident = await prisma.incident.findUnique({ where: { id } });
  if (!incident) return NextResponse.json({ error: 'Incident not found' }, { status: 404 });

  const updated = await prisma.incident.update({
    where: { id },
    data: { resolved: !incident.resolved },
    include: { camera: true },
  });
  return NextResponse.json(updated);
}