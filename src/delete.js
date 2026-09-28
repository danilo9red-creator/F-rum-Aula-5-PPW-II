const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.coursesModules.delete({
    where: {
      courseId_moduleId: {
        courseId: 1,
        moduleId: 2
      }
    }
  });

  console.log('Relacionamento removido com sucesso!');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });