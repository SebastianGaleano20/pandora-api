import Joi from 'joi'

export const bodyProductSchema = Joi.object({
    body: Joi.object({
        productName: Joi.string().max(80).required(),
        price: Joi.number(),
        isVegan: Joi.boolean(),
        image: Joi.string().uri(),
        stock: Joi.boolean(),
        description: Joi.string(),
        categoryId: Joi.number().required()
    })
})

export const idProductSchema = Joi.object({
    params: Joi.object({
        id: Joi.string().pattern(/^[0-9]+$/, 'id must be a number').required()
    })
})

export const updateProductSchema = Joi.object({
    body: bodyProductSchema.extract('body'),
    params: idProductSchema.extract('params')
})

export const userSchema = Joi.object({
    firstName: Joi.string().max(80).required(),
    secondName: Joi.string().max(80).required(),
    lastName: Joi.string().max(80).required(),
    email: Joi.string().email().required(),
    isAdmin: Joi.boolean()
})
