import { Router } from "express"
import { purchaseController } from "../controllers/purchaseController.js"

export const purchaseRouter = () => {
    const purchaseRouter = Router()

    const { getPurchases, createPurchase, updatePurchase, deletePurchase, getPurchaseById } = purchaseController()

    purchaseRouter.route('/purchases')
        .get(getPurchases)
        .post(createPurchase)
    purchaseRouter.route('/purchases/:id')
        .get(getPurchaseById)        
        .delete(deletePurchase)
        .patch(updatePurchase)
    
    return purchaseRouter
}