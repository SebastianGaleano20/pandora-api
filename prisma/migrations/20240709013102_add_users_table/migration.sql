/*
  Warnings:

  - You are about to drop the column `createdAt` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "createdAt",
DROP COLUMN "product",
DROP COLUMN "updateAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "is_vegan" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "product_name" VARCHAR(80) NOT NULL,
ADD COLUMN     "stock" BOOLEAN NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(80) NOT NULL,
    "second_name" VARCHAR(80) NOT NULL,
    "last_name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_first_name_second_name_last_name_key" ON "users"("first_name", "second_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "products_product_name_key" ON "products"("product_name");
