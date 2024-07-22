import { Router } from "express"
import { purchaseController } from "../controllers/purchaseController.js"

export const purchaseRouter = () => {
    const purchaseRouter = Router()

    const { createPurchase, getPurchasesUser } = purchaseController()

    purchaseRouter.route('/purchases')
        .post(createPurchase)

    purchaseRouter.route('/purchases/:id')
        .get(getPurchasesUser)
        
    return purchaseRouter
}