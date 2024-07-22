import jwt from 'jsonwebtoken'

export const generateToken = (data, expiresIn='1d') => {
    const token = jwt.sign(data, process.env.SECRET_KEY, {
        expiresIn
    })
    return token
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY)
}
