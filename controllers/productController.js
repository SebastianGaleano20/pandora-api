import { PrismaClient } from '@prisma/client'
import httpStatus from '../helpers/httpStatus.js'
import { upload } from '../utils/uploadFile.js'
import { deleteFile } from '../utils/s3.js'

const prisma = new PrismaClient()

//Controladores de los diferentes metodos HTTP de mi aplicación
export const productController = () => {
    const getProducts = async (request, response, next) => {
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
        function stringToBoolean(str) {
            if (typeof str !== 'string') {
              return null;
            }
            
            switch (str.toLowerCase()) {
              case 'true':
                return true;
              case 'false':
                return false;
              default:
                return null;
            }
          }
        
        upload(request, response, async (error) => {
            if (error) {
                next(error)
            }
            const {
                productName,
                price,
                isVegan,
                stock,
                description,
                categoryId
            } = request.body;

            try {
                const createdProduct = await prisma.product.create({
                    data: {
                        productName,
                        price: Number(price),
                        isVegan: stringToBoolean(isVegan),
                        stock: stringToBoolean(stock),
                        description,
                        categoryId: Number(categoryId),
                        image: request.file.location
                    }
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
        })
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
        upload(request, response, async (error) => {
            if (error) {
                next(error)
            }

            const { id } = request.params
            const productId = id
            const newProductData = request.body

            try {
                const productUpdate = await prisma.books.findUnique({
                    where: {
                        id: productId
                    }
                })

                const product = await prisma.product.update({
                    where: {
                        id: productId
                    },
                    data: {
                        ...newProductData,
                        image: request.file.location
                    }
                })
                const deleteKey = productUpdate.image.split('/').pop()
                await deleteFile(deleteKey)

                const responseFormat = {
                    data: productUpdate,
                    message: 'Product update successfully'
                }
                return response.status(httpStatus.OK).json(responseFormat);
            } catch (error) {
                next(error)
            } finally {
                await prisma.$disconnect()
            }
        })
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
                const deleteKey = product.image.split('/').pop()
                await deleteFile(deleteKey)

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
