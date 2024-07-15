import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//Controladores de los diferentes metodos HTTP de mi aplicación
export const productController = (PRODUCTS) => {
    const getProducts = async (_request, response, next) => {
        try {
            const products = await prisma.products.findMany();
            const responseFormat = {
                data: products,
                message: 'Products retrieved successfully'
            }
            return response.status(200).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    }

    /*const getProducts = ((_request, response) => {
        return response.json(PRODUCTS);
    });*/

    const createProduct = async (request, response, next) => {
        const newProduct = request.body;
        try {
            const createdProduct =  await prisma.products.create({
                data: newProduct
            })
            const responseFormat = {
                data: createdProduct,
                message: 'Products created successfully'
            }
            return response.status(201).json(responseFormat);
        } catch (error) {
            next(error)
        }finally{
            await prisma.$disconnect()
        }
    }
    
    const getProductById = ((request, response) => {
        const { id } = request.params;
        const product = PRODUCTS.find((product) => product.id === id);
        if (!product) {
            return response.status(404).json({ message: 'Product not found' });
        }
        return response.status(200).json(product);
    })
    const updateProduct = ((request, response) => {
        const { id } = request.params;
        const products = structuredClone(PRODUCTS);
        const product = products.find((product) => product.id === id)
        if (!product) {
            return response.status(404).json({ message: 'Product not found' })
        }
        const updateProduct = request.body;
        const index = products.indexOf(product);
        products.splice(index, 1, { id: product.id, ...updateProduct })
        return response.status(200).json(products);
    })
    const deleteProduct = ((req, res) => {
        const { id } = req.params;
        const products = structuredClone(PRODUCTS);
        const product = products.find((product) => product.id === id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const index = products.indexOf(product)
        products.splice(index, 1)
        return res.status(200).json(products);
    })
    return {
        getProducts,
        createProduct,
        getProductById,
        deleteProduct,
        updateProduct
    }
}