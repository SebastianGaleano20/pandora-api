//Objeto que contiene los diferentes errores de mi aplicacion
const ERROR_HANDLER = {
    defaultError: (response, error) => {
        response
            .status(500)
            .json({
                success: false,
                message: error.message
            })
    }
}

//Middleware que maneja los errores
export const errorHandler = (error, _request, response, _next) => {
    console.error('Error Handler');

    const handler = ERROR_HANDLER[error.name] || ERROR_HANDLER.defaultError;

    handler(response, error);
}