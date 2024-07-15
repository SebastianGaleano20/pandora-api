import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const categoryController = () =>{
    const getCategories = async (_request, response, next) => {
        try {
            const categories = await prisma.categories.findMany();
            
            const responseFormat = {
                data: categories,
                message: 'Categories retrieved successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
}

return {
    getCategories
}
}