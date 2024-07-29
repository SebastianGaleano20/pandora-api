import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
/*import multer from 'multer'
import multers3 from 'multer-s3'
import {s3} from 'aws-sdk'*/
import { expressjwt as exjwt } from 'express-jwt'
import { productRoutes } from './routes/producRouter.js'
import { categoryRouter } from './routes/categoryRouter.js'
import { userRouter } from './routes/userRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { purchaseRouter } from './routes/purchaseRouter.js'

dotenv.config()
const SERVER_PORT = process.env.SERVER_PORT || 2010

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATH,DELETE'
}))

app.use(exjwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256']
}).unless({
    path: ['/api/login', '/api/register', '/api/products', '/api/products:id', '/api/category', '/api/category/:id', '/api/refresh-token']
})
)

app.use('/api', productRoutes(), userRouter(), categoryRouter(), purchaseRouter())

app.use(errorHandler)

app.listen(SERVER_PORT, () => {
    console.log(`Server on listening on port ${SERVER_PORT}`)
});