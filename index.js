import express from 'express';
import {PRODUCTS} from './data.js';
import dotenv from 'dotenv'; 

dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 2010;

const app = express();


app.listen(SERVER_PORT, ()=>{
    console.log(`Server on listening on port ${SERVER_PORT}`);
})