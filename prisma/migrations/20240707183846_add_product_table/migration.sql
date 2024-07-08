-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "product" VARCHAR(80) NOT NULL,
    "price" INTEGER NOT NULL,
    "category" VARCHAR(80) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
