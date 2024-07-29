import multer from 'multer'
import multers3 from 'multer-s3'
import { s3 } from './s3'

export const upload = multer({
    storage: multers3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        metadata: function (_request, file, cb) {
            cb(null, { filelName: file.fieldname })
        },
        key: function (_request, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname)
        },
    }),
    limits: { fieldSize: 200000 }
}).single('file')