import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import multer from 'multer'
import multers3 from 'multer-s3'
import s3, { Credentials } from 'aws-sdk'
import { expressjwt as exjwt } from 'express-jwt'
import { productRoutes } from './routes/producRouter.js'
import { categoryRouter } from './routes/categoryRouter.js'
import { userRouter } from './routes/userRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { purchaseRouter } from './routes/purchaseRouter.js'
import path from 'path'
import { fileURLToPath } from 'url'


const s3 = new s3({
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_REGION
})
const storage = multers3({
    s3,
    bucket,
    metadata: (request, file, cb)=>{
        cb(null, {fieldName: file.fieldname})
    },
    key: (request, file, cb)=>{
        cb(null, Date.now().toString() + '-' + file.originalname)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (request, file, cb) =>{
        if(MYMETYPES.includes(file.mimetype)){
            return cb(null,true)
        }else{
            return cb({
                stack: 'This file is not allowed'
            })
        }
    }
})


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