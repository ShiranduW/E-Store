import express from 'express';
import { getProduct, createProduct, getProducts ,deleteProduct, updateProducts } from '../application/product';
import { Request, Response, NextFunction, RequestHandler} from "express"; 

// Create router for Products table
export const productRouter = express.Router()


// const asyncHandler = ( 
//     fn: (req: Request, res: Response, next: NextFunction) => Promise<any> 
//     ): RequestHandler => { 
//     return (req, res, next) => {
//     fn(req, res, next).catch(next); 
//     }; 
//     }; 

// Create separate productRouter for store same routes.
productRouter.
route('/')
.get((getProducts))
.post((createProduct));
// These two are previous routes
//app.get('/products' , sendProducts);
//app.post('/products', createProduct)

// Create separate productRouter for store same routes.
productRouter
.route('/:id')
.get(getProduct)
.delete(deleteProduct)
.patch(updateProducts);
// These three are previous routes
//app.get('/products/:id', getProduct)
//app.delete('/products/:id' ,deleteProduct)
//app.patch('/products/:id' , updateProducts)