const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    include: {
      modules: {
        include: {
          module: true
        }
      }
    }
  });

  console.log(JSON.stringify(courses, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });