import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const categoryController = () => {
    const getCategories = async (_request, response, next) => {
        try {
            const categories = await prisma.categories.findMany()
            const responseFormat = {
                data: categories,
                message: 'Categories retrieved successfully'
            }
            return response.status(200).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }
    const createCategory = async (request, response, next) => {
        const newCategory = request.body
        try {
            const createdCategory = await prisma.categories.create({
                data: newCategory
            })

            const responseFormat = {
                data: createdCategory,
                message: 'Category created successfully'
            }
            return response.status(201).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getCategoryById = async (request, response, next) => {
        const { id } = request.params
        const categoryId = Number(id)
        try {
            const category = await prisma.categories.findUnique({
                where: {
                    id: categoryId
                }
            })
            const responseFormat = {
                data: category,
                message: 'category retrieved successfully'
            }
            return response.status(200).json(responseFormat);
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
            const category = await prisma.categories.update({
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
            return response.status(200).json(responseFormat);
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
            const category = await prisma.categories.delete({
                where: {
                    id: categorytId
                }
            })
            const responseFormat = {
                data: category,
                message: 'category delete successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        getCategoryById
    }
}