import Joi from 'joi'

export const userSchema = Joi.object({
    body: Joi.object({
        firstName: Joi.string().max(80).required(),
        secondName: Joi.string().max(80).required(),
        lastName: Joi.string().max(80).required(),
        email: Joi.string().email().required(),
        isAdmin: Joi.boolean()
    })
})

export const idUserSchema = Joi.object({
    params: Joi.object({
        email: Joi.string().email().required(),
    })
})