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
    const createCategory = async (request,response, next) =>{
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
        }finally{
            await prisma.$disconnect()
        }
    }

    return {
        getCategories,
        createCategory
    }
}