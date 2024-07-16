import Joi from 'joi'

export const productSchemas = Joi.object({
    productName: Joi.string().max(80).required(),
    price: Joi.number(),
    isVegan: Joi.boolean(),
    image: Joi.string().uri(),
    stock: Joi.boolean(),
    description: Joi.string(),
    categoryId: Joi.number().required()
})

export const idProductSchema = Joi.object({
    id: Joi.string().patern(/^[0-9]+$/,'id must be a number').required()
})

export const categorySchema = Joi.object({
    name: Joi.string().required(),
    id: Joi.string().patern(/^[0-9]+$/,'id must be a number').required()
})

export const userSchema = Joi.object({
    firstName: Joi.string().max(80).required(),
    secondName: Joi.string().max(80).required(),
    lastName: Joi.string().max(80).required(),
    email: Joi.string().email().required(),
    isAdmin: Joi.boolean()
})
