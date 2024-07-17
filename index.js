import express from 'express';
import dotenv from 'dotenv';
import { productRoutes } from './routes/producRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { categoriesRouter } from './routes/categoryRouter.js';

//Configuracion de mi variable de entorno PORT
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 2010;

const app = express(); //Creacion de mi servidor

app.use(express.json()); //Middleware que permite leer JSON del request.body

app.use('/api', productRoutes()); //Uso de mi router

app.use('/api', categoriesRouter())

app.use(errorHandler);  //Middleware de errores

//Servidor en escucha
app.listen(SERVER_PORT, () => {
    console.log(`Server on listening on port ${SERVER_PORT}`);
});