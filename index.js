import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { upload } from './utils/uploadFile.js'
import { expressjwt as exjwt } from 'express-jwt'
import { productRoutes } from './routes/producRouter.js'
import { categoryRouter } from './routes/categoryRouter.js'
import { userRouter } from './routes/userRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { purchaseRouter } from './routes/purchaseRouter.js'
import httpStatus from './helpers/httpStatus.js'


dotenv.config()
const SERVER_PORT = process.env.SERVER_PORT || 2010

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATH,DELETE'
}))

app.use('/api/upload', (request, response)=>{
    upload(request,response, (error)=>{
        if(error){
            console.log(error)
            return response.status(httpStatus.BAD_REQUEST).send('Upload failed')
        }
        response.status(httpStatus.OK).json(request.file)
    })
})

app.use(exjwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/login',
        '/api/register',
        '/api/products',
        '/api/category',
        '/api/refresh-token',
        '/api/purchases'
    ]
}))

app.use('/api', productRoutes(), userRouter(), categoryRouter(), purchaseRouter())

app.use(errorHandler)

app.listen(SERVER_PORT, () => {
    console.log(`Server on listening on port ${SERVER_PORT}`)
});