import { categorySchema } from '../schemas/categorySchema.js'

export const schemaValidator = (schema) => async (request, response, next) => {
    const { error } = schema.validate({
        body: request.body,
        params: request.params,
        query: request.query
    },{
        abortEarly: false,
        allowUnknown: true
    })
    error ? next(error) : next()
}


/*
export const validateProduct = async (request, response, next) => {
    const { error } = bodyProductSchema.validate(request.body, { abortEarly: false }
    )
    if (error) {
        return response.status(400).json({ message: error.message })
    }
    next()
}
export const validateIdProduct = async (request, response, next) => {
    const { id } = request.params
    const { error } = bodyProductSchema.validate(request.body, { abortEarly: false }
    )
    if (!id) {
        return response.status(400).json({ message: 'id is required' })
    }
    next()
}
*/

export const validateCategory = async (request, response, next) => {
    const { error } = categorySchema.validate(request.body)
    if (error) {
        return response.status(400).json({ message: error.message })
    }
}