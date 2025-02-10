import express from 'express';
import { sendCategory, createCategory, getCategory ,deleteCategory, updateCategory } from '../application/category';
import { Request, Response, NextFunction, RequestHandler} from "express"; 

export const categoryRouter = express.Router();

categoryRouter.
route('/')
.get(sendCategory)
.post(createCategory);

categoryRouter
.route('/:id')
.get(getCategory)
.delete(deleteCategory)
.patch(updateCategory);