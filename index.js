import express from 'express';
import { PRODUCTS } from './data.js';
import dotenv from 'dotenv';
import { productRoutes } from './routes/producRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 2010;

const app = express();
app.use(express.json());

app.use('/api', productRoutes(PRODUCTS));
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
    console.log(`Server on listening on port ${SERVER_PORT}`);
});