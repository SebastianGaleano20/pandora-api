import { PrismaClient } from '@prisma/client'
import httpStatus from '../helpers/httpStatus.js'

const prisma = new PrismaClient()

//Controladores de los diferentes metodos HTTP de mi aplicación
export const productController = () => {
    const getProducts = async (_request, response, next) => {
        const { query } = request

        try {
            const products = await prisma.product.findMany({
                  where: {
                productName: {
                    contains: query?.productName ?? ''
                }
            }
            })
            const responseFormat = {
                data: products,
                message: 'Products retrieved successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const createProduct = async (request, response, next) => {
        const newProduct = request.body;
        try {
            const createdProduct = await prisma.product.create({
                data: newProduct
            })
            const responseFormat = {
                data: createdProduct,
                message: 'Product created successfully'
            }
            return response.status(httpStatus.CREATED).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getProductById = async (request, response, next) => {
        const { id } = request.params
        const productId = id
        try {
            const product = await prisma.product.findUnique({
                where: {
                    id: productId
                }
            })
            const responseFormat = {
                data: product,
                message: 'Product retrieved successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const updateProduct = async (request, response, next) => {
        const { id } = request.params
        const productId = id
        const newProductData = request.body

        try {
            const product = await prisma.product.update({
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
            return response.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const deleteProduct = async (request, response, next) => {
        const { id } = request.params
        const productId = id
        try {
            const product = await prisma.product.delete({
                where: {
                    id: productId
                }
            })
            const responseFormat = {
                data: product,
                message: 'Product delete successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat);
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
