import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create cameras
  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: 'Ground Floor' },
      { name: 'Vault', location: 'Basement' },
      { name: 'Entrance', location: 'Main Gate' },
    ],
  });

  // Get camera IDs
  const cameraList = await prisma.camera.findMany();

  // Incident types and thumbnails
  const types = [
    { type: 'Unauthorised Access', thumb: '/file.svg' },
    { type: 'Gun Threat', thumb: '/globe.svg' },
    { type: 'Face Recognised', thumb: '/window.svg' },
    { type: 'Suspicious Package', thumb: '/vercel.svg' }
  ];

  // Generate 12 incidents over 24 hours
  const now = new Date();
  const incidents = [];
  for (let i = 0; i < 13; i++) {
    const camera = cameraList[i % cameraList.length];
    const typeObj = types[i % types.length];
    const tsStart = new Date(now.getTime() - (24 - i * 2) * 60 * 60 * 1000); // spread over 24h
    const tsEnd = new Date(tsStart.getTime() + 15 * 60 * 1000); // 15 min duration
    incidents.push({
      cameraId: camera.id,
      type: typeObj.type,
      tsStart,
      tsEnd,
      thumbnailUrl: typeObj.thumb,
      resolved: i % 4 === 0, // some resolved
    });
  }

  await prisma.incident.createMany({ data: incidents });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });