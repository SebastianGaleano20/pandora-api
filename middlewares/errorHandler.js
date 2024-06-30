export const ERROR_HANDLER = {
    defaultError: (response, error) =>{
        response
           .status(500)
           .json({
            success: false,
            message: error.message
           })
    }
}