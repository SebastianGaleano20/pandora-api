import http_status from "../helpers/httpStatus.js"
import { verifyToken } from "../utils/tokenManagment.js"

export const isAdmin = (request, response, next) => {
    const headers = request.headers
    if (!headers.authorization) {
        return response.status(http_status.UNAUTHORIZED).json({
            success: false,
            message: "Unauthorized"
        })
    }

    const token = headers.authorization.split(" ")[1]

    const { role } = verifyToken(token)
    const ADMIN_ROLE = 'ADMIN'
    if (role !== ADMIN_ROLE) {
        return response.status(http_status.UNAUTHORIZED).json({
            success: false,
            message: "Unauthorized.role"
        })
    }

    next()
}   