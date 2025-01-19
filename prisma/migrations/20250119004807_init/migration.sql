-- CreateEnum
CREATE TYPE "IssueStatus" AS ENUM ('STOP', 'SLOW');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('STOP', 'WORKING', 'IDLE', 'ON_LEAVE');

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TelegramUser" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "username" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TelegramUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensorlist" (
    "id" SERIAL NOT NULL,
    "objid" INTEGER NOT NULL,
    "telegramUserId" TEXT,

    CONSTRAINT "Sensorlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prtgdata" (
    "id" SERIAL NOT NULL,
    "objid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "downtime" TEXT NOT NULL,
    "downtimetime" TEXT NOT NULL,
    "downtimesince" TEXT,
    "uptime" TEXT NOT NULL,
    "uptimetime" TEXT NOT NULL,
    "warnsens" TEXT NOT NULL,
    "partialdownsens" TEXT NOT NULL,
    "downsens" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "lastup" TEXT NOT NULL,
    "lastcheck" TEXT NOT NULL,
    "comments" TEXT,
    "minigraph" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prtgdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "secreateKey" INTEGER NOT NULL,
    "TelegramUserId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "IssueStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "sensorId" INTEGER NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'STOP',
    "acknowledgment" TEXT,
    "telegramUserId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TelegramUser_chatId_key" ON "TelegramUser"("chatId");

-- CreateIndex
CREATE UNIQUE INDEX "Sensorlist_objid_key" ON "Sensorlist"("objid");

-- CreateIndex
CREATE UNIQUE INDEX "Prtgdata_objid_key" ON "Prtgdata"("objid");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_secreateKey_key" ON "User"("secreateKey");

-- CreateIndex
CREATE UNIQUE INDEX "User_TelegramUserId_key" ON "User"("TelegramUserId");

-- AddForeignKey
ALTER TABLE "Sensorlist" ADD CONSTRAINT "Sensorlist_telegramUserId_fkey" FOREIGN KEY ("telegramUserId") REFERENCES "TelegramUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_TelegramUserId_fkey" FOREIGN KEY ("TelegramUserId") REFERENCES "TelegramUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_telegramUserId_fkey" FOREIGN KEY ("telegramUserId") REFERENCES "TelegramUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
