export const ERROR_HANDLER = {
    defaultError: (response, error) => {
        response
            .status(500)
            .json({
                success: false,
                message: error.message
            })
    }
}

export const errorHandler = (error, _request, response, _next) => {
    console.error('Error Handler');

    const handler = ERROR_HANDLER[error.name] || ERROR_HANDLER.defaultError;

    handler(response, error);
}