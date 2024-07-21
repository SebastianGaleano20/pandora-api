//Funcion de orden superior
export const schemaProductValidator = (schema) => async (request, _response, next) => {
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

export const schemaCategoryValidator = (schema) => async (request, _response, next) => {
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

export const schemaUserValidator = (schema) => async (request, _response, next) => {
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
