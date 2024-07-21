import { PrismaClient } from "@prisma/client"
import httpStatus from '../helpers/httpStatus.js'

const prisma = new PrismaClient()

export const purchaseController = () => {
    const productBuyByUser = async (request, response, next) => {
        const { body } = request
        const userId = Number(body?.userId ?? null)
        const productId = body?.productId ?? null
        const quantity = request.body.quantity
        try {
            const productBuyUser = await prisma.purchase.create({
                data: {
                    userId,
                    productId,
                    quantity
                }
            })
            return response.status(httpStatus.CREATED).json(productBuyUser)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getPurchasesUser = async (request, response, next) => {
        const { query } = request
        const { userId } = Number(query?.id)
        try {
            const purchases = await prisma.purchase.findMany({
                where: {
                    userId
                },
                select: {
                    productId: true,
                    userId: true,
                    quantity: true,
                    product: {
                        select: {
                            productName: true,
                            price: true
                        }
                    },
                    user: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            })

            return response.status(httpStatus.OK).json(purchases)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }
    return {
        productBuyByUser,
        getPurchasesUser
    }
}


