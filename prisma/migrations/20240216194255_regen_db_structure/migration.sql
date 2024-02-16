-- CreateTable
CREATE TABLE "Course" (
    "code" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shift" TEXT NOT NULL,
    "min_duration" DECIMAL NOT NULL,
    "max_duration" DECIMAL NOT NULL,
    "legal_base" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ob_workload" INTEGER NOT NULL,
    "op_workload" INTEGER NOT NULL,
    "ac_workload" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "code" VARCHAR(8) NOT NULL,
    "name" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "bibliography" TEXT NOT NULL,
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),
    "name" TEXT,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_disciplines_deleted_at" ON "Discipline"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "idx_users_email" ON "User"("email");

-- CreateIndex
CREATE INDEX "idx_users_deleted_at" ON "User"("deleted_at");
