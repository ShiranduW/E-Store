import NotFoundError from "../domain/errors/not-found-error";
import Category from "../infrastrucutre/schemas/Category";
import { Request, Response, NextFunction } from "express";
import { CategoryDTO } from "../domain/dto/category";
import ValidationError from "../domain/errors/validation-error";


// Get products through database using async function.
// async function use because, in this use await operation.
export const sendCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    // Going through all Product in products collection and store these all Product in data variable. 
    // This take some times because in this use await keyword.
    const data = await Category.find();

    res.status(200).json(data)
    return;
  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    // const result:CategoryDTO = (req.body) 
    // Validate the request body using the Zod
    const result = CategoryDTO.safeParse(req.body);
    if (!result.success) {
      // If validation fails, throw a ValidationError
      throw new ValidationError("Invalid category data");
    }

    await Category.create(result.data);
    res.status(201).send()
    return;
    
    // // Create Product in products collection according to request body.
    // await Category.create(req.body);
    // return res.status(201).send()
    // // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error)
  }
}

export const getCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id
    // Create a random error for check whether error handling is working
    //throw new Error("Database not responding")
    const category = await Category.findById(id);

    if (!category) {
      // This error is show in console for developer
      // These are the known errors
      throw new NotFoundError("Product not found");
    }
      
    res.status(200).json(category)
    return;
    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error)
  }
};

export const deleteCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    // Remove the product from the database.
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      // This error is show in console for developer
      // These are the known errors
      throw new NotFoundError("Category not found");
    }
    // // Remove the product from the array
    // Product.splice(index, 1);
    // Must include response, without this they waiting for response.
    res.status(201).send()
    return;

    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error);
  }
}

export const updateCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndUpdate(id, req.body);

    if (!category) {
      // This error is show in console for developer
      // These are the known errors
      throw new NotFoundError("Category can not update");
    }
    // product.name = req.body.name;
    // product.price = req.body.price;
    // product.description = req.body.description;
    // product.image = req.body.image;

    res.status(201).send(category)
    return;

    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error);
  }
}