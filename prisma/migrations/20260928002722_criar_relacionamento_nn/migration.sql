-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursesModules" (
    "courseId" INTEGER NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "CoursesModules_pkey" PRIMARY KEY ("courseId","moduleId")
);

-- AddForeignKey
ALTER TABLE "CoursesModules" ADD CONSTRAINT "CoursesModules_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursesModules" ADD CONSTRAINT "CoursesModules_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;
