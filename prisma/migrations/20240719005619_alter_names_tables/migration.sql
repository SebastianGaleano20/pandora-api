/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `purchases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_product_id_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_user_id_fkey";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "products";

-- DropTable
DROP TABLE "purchases";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "product_name" VARCHAR(80) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "is_vegan" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,
    "stock" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(80) NOT NULL,
    "second_name" VARCHAR(80) NOT NULL,
    "last_name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase" (
    "user_id" INTEGER NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("user_id","product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_product_name_key" ON "product"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_first_name_second_name_last_name_key" ON "user"("first_name", "second_name", "last_name");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
