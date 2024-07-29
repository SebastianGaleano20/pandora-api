import { PrismaClient } from '@prisma/client'
import httpStatus from '../helpers/httpStatus.js'

const prisma = new PrismaClient()

export const categoryController = () => {
    const getCategory = async (request, response, next) => {
        const { query } = request

        try {
            const category = await prisma.category.findMany({
                where: {
                    name: {
                        contains: query?.name ?? ''
                    }
                }
            })
            const responseFormat = {
                data: category,
                message: 'category retrieved successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }
    const createCategory = async (request, response, next) => {
        const newCategory = request.body
        try {
            const createdCategory = await prisma.category.create({
                data: newCategory
            })

            const responseFormat = {
                data: createdCategory,
                message: 'Category created successfully'
            }
            return response.status(httpStatus.CREATED).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getCategoryById = async (request, response, next) => {
        const { query } = request
        const categoryId = Number(query)
        try {
            const category = await prisma.category.findUnique({
                where: {
                    id: categoryId
                }
            })
            const responseFormat = {
                data: category,
                message: 'category retrieved successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }


    const updateCategory = async (request, response, next) => {
        const { id } = request.params
        const categoryId = Number(id)
        const newCategoryData = request.body

        try {
            const category = await prisma.category.update({
                where: {
                    id: categoryId
                },
                data: newCategoryData
            }
            )
            const responseFormat = {
                data: category,
                message: 'category update successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const deleteCategory = async (request, response, next) => {
        const { id } = request.params
        const categorytId = Number(id)
        try {
            const category = await prisma.category.delete({
                where: {
                    id: categorytId
                }
            })
            const responseFormat = {
                data: category,
                message: 'category delete successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getCategory,
        createCategory,
        updateCategory,
        deleteCategory,
        getCategoryById
    }
}
