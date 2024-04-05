import { prisma } from './../src/lib/prisma';
async function seed() {
  await prisma.event.create({
    data: {
      id: '8e4af69e-2f45-44b8-884c-982b01b4c0d8',
      title: 'Final do paulistão',
      slug: 'paulistao',
      details: 'Venha conferir a final do paulistão 2024',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect();
});
