const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const course1 = await prisma.course.create({
    data: {
      name: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
    }
  });

  const course2 = await prisma.course.create({
    data: {
      name: 'Sistemas de Informação'
    }
  });

  const module1 = await prisma.module.create({
    data: {
      name: 'Banco de Dados'
    }
  });

  const module2 = await prisma.module.create({
    data: {
      name: 'Programação para Web'
    }
  });

  const module3 = await prisma.module.create({
    data: {
      name: 'Engenharia de Software'
    }
  });

  await prisma.coursesModules.createMany({
    data: [
      {
        courseId: course1.id,
        moduleId: module1.id
      },
      {
        courseId: course1.id,
        moduleId: module2.id
      },
      {
        courseId: course1.id,
        moduleId: module3.id
      },
      {
        courseId: course2.id,
        moduleId: module1.id
      },
      {
        courseId: course2.id,
        moduleId: module3.id
      }
    ]
  });

  console.log('Registros criados com sucesso!');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });