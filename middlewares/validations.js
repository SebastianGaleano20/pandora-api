import { categorySchema } from '../schemas/categorySchema.js'
import { productSchema } from '../schemas/productSchema.js'

export const validateProduct = async (request, response, next) => {
    const { error } = productSchema.validate(request.body, {abortEarly: false}
    )
    if (error) {
        return response.status(400).json({ message: error.message })
    }
    next()
}

export const validateCategory = async (request, response, next) => {
    const { error } = categorySchema.validate(request.body)
    if (error) {
        return response.status(400).json({ message: error.message })
    }
}