import { PrismaClient } from "@prisma/client"
import httpStatus from '../helpers/httpStatus.js'

const prisma = new PrismaClient()

export const purchaseController = () => {
    const getPurchases = async (_request, response, next) => {
        try {
            const purchases = await prisma.purchase.findMany()
            const responseFormat = {
                data: purchases,
                message: 'Purchases retrieved successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const createPurcase = async (request, response, next) => {
        const newPurchase = request.body
        try {
            const createPurchase = await prisma.purchase.create({
                data: newPurchase
            })
            const responseFormat = {
                data: createPurchase,
                message: 'Purchase created successfully'
            }
            return response.status(httpStatus.CREATED).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getPurchaseById = async (request, response, next) => {
        const { id } = request.params
        const purchaseId = id
        try {
            const purchase = await prisma.purchase.findUnique({
                where: {
                    id: purchaseId
                }
            })
            const responseFormat = {
                data: purchase,
                message: 'Purchase retrieved successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }
    
    const updatePurchase = async (request,response,next) =>{
        const { id } = request.params
        const purchaseId = id
        const newPurchaseData = request.body
        try {
            const purchase = await prisma.purchase.update({
                where: {
                    id: purchaseId
                },
                data: newPurchaseData
            })
            const responseFormat = {
                data: purchase,
                message: 'Purchase update successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }
    
    const deletePurchase = async (request, response, next) => {
        const { id } = request.params
        const purchaseId = id
        try {
            const purchase = await prisma.purchase.delete({
                where: {
                    id: purchaseId
                }
            })
            const responseFormat = {
                data: purchase,
                message: 'Purchases delete successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getPurchases,
        createPurcase,
        getPurchaseById,
        updatePurchase,
        deletePurchase
    }

}