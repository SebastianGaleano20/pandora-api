import express from 'express';
import { PRODUCTS } from './data.js';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';


dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 2010;

const app = express();
app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Server on listening on port ${SERVER_PORT}`);
})

app.get('/products', (_, res) => {
    return res.json(PRODUCTS);
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = PRODUCTS.find((product) => product.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
})

app.post('/products',(req,res)=>{
    const newProduct = req.body;
    const products = structuredClone(PRODUCTS);
    products.push({
        id: uuidv4(),
        ...newProduct
    })
    return res.status(201).json(products);
})