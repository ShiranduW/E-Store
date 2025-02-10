import "dotenv/config";
import express from 'express';
import { productRouter } from './api/product';
import { categoryRouter } from './api/category';
import globalErrorHandlingMiddleware from './api/middleware/global-error-handling-middleware';
import { connectDB } from './infrastrucutre/db';
import cors from "cors";


const app = express();
app.use(express.json()); // Middleware to parse JSON requests 
// CORS Policy
app.use(cors({ origin: "http://localhost:5173" }));

// Pre-Middleware for doing task between request and response
// app.use((req, res, next) => {
//     console.log("Recieved a request");
//     console.log(req.method, req.url);
//     next();
// });

// Introduce Base Route for access products table
app.use('/api/products', productRouter)
app.use('/api/categories', categoryRouter)

// Introduce Error handling middleware for using Error handling in Handler function
// app.use(globalErrorHandlingMiddleware);

// When start server then connect database to server.
connectDB();
// Start Server using app.listen function.
app.listen(8000, () => console.log(`Server running on port ${8000}`));