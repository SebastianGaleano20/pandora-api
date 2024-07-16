import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//Controladores de los diferentes metodos HTTP de mi aplicación
export const productController = (PRODUCTS) => {
    const getProducts = async (_request, response, next) => {
        try {
            const products = await prisma.products.findMany();
            const responseFormat = {
                data: products,
                message: 'Products retrieved successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    }

    const createProduct = async (request, response, next) => {
        const newProduct = request.body;
        try {
            const createdProduct = await prisma.products.create({
                data: newProduct
            })
            const responseFormat = {
                data: createdProduct,
                message: 'Products created successfully'
            }
            return response.status(201).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getProductById = async (request, response, next) => {
        const { id } = request.params
        const productId = Number(id)
        try {
            const product = await prisma.products.findUnique({
                where: {
                    id: productId
                }
            })
            const responseFormat = {
                data: product,
                message: 'Product retrieved successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const updateProduct = async (request, response, next) => {
        const { id } = request.params
        const productId = Number(id)
        const newProductData = request.body

        try {
            const product = await prisma.products.update({
                where: {
                    id: productId
                },
                data: newProductData
            }
            )
            const responseFormat = {
                data: product,
                message: 'Product update successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const deleteProduct = async (request, response, next) => {
        const { id } = request.params
        const productId = Number(id)
        try {
            const product = await prisma.products.delete({
                where: {
                    id: productId
                }
            })
            const responseFormat = {
                data: product,
                message: 'Product delete successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getProducts,
        createProduct,
        getProductById,
        deleteProduct,
        updateProduct
    }
}