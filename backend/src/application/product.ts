import NotFoundError from "../domain/errors/not-found-error";
import Product from "../infrastrucutre/schemas/Product";
import { Request, Response, NextFunction } from "express";
import { ProductDTO } from "../domain/dto/product";
import ValidationError  from "../domain/errors/validation-error";

// const products = [
//   {
//     categoryId: "1",
//     image: "/assets/products/airpods-max.png",
//     id: "1",
//     name: "AirPods Max",
//     price: "549.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
//   {
//     categoryId: "3",
//     image: "/assets/products/echo-dot.png",
//     id: "2",
//     name: "Echo Dot",
//     price: "99.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
  // {
  //   categoryId: "2",
  //   image: "/assets/products/pixel-buds.png",
  //   id: "3",
  //   name: "Galaxy Pixel Buds",
  //   price: "99.00",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  // },
//   {
//     categoryId: "1",
//     image: "/assets/products/quietcomfort.png",
//     id: "4",
//     name: "Bose QuiteComfort",
//     price: "249.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
//   {
//     categoryId: "3",
//     image: "/assets/products/soundlink.png",
//     id: "5",
//     name: "Bose SoundLink",
//     price: "119.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
//   {
//     categoryId: "5",
//     image: "/assets/products/apple-watch.png",
//     id: "6",
//     name: "Apple Watch 9",
//     price: "699.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
//   {
//     categoryId: "4",
//     image: "/assets/products/iphone-15.png",
//     id: "7",
//     name: "Apple Iphone 15",
//     price: "1299.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
//   {
//     categoryId: "4",
//     image: "/assets/products/pixel-8.png",
//     id: "8",
//     name: "Galaxy Pixel 8",
//     price: "549.00",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
//   },
// ];


// Get products through database using async function.
// async function use because, in this use await operation.
export const getProducts = async (
  req:Request, 
  res:Response, 
  next:NextFunction
) => {
  try {
    // Query param
    const { categoryId } = req.query;
    // Going through all Product in products collection and store these all Product in data variable. 
    // This take some times because in this use await keyword.
    if (!categoryId) {
    const data = await Product.find();
    res.status(200).json(data);
    return;
    }

    const data = await Product.find({ categoryId });
    res.status(200).json(data);
    return;

  } catch (error) {
    next(error)
  }
};

export const createProduct = async (req:Request, res:Response, next:NextFunction) => {
  try {
    // Validate the request body using the Zod
    const result = ProductDTO.safeParse(req.body);

    if (!result.success) {
      // If validation fails, throw a ValidationError
      throw new ValidationError("Invalid product data");
    }
    // Create Product in products collection according to request body.
    await Product.create(req.body);
     res.status(201).send()
     return;

    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error)
  }
};

export const getProduct = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id
    // Create a random error for check whether error handling is working
    //throw new Error("Database not responding")
    const product = await Product.findById(id).populate("categoryId");

    if (!product) {
      // This error is show in console for developer
      // These are the known errors
      throw new NotFoundError("Product not found");
    }
    res.status(201).json(product)
    return
    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error)
  }
};

export const deleteProduct = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    // Remove the product from the database.
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      // This error is show in console for developer
      // These are the known errors
      throw new NotFoundError("Product not found");
    }
    // // Remove the product from the array
    // Product.splice(index, 1);
    // Must include response, without this they waiting for response.
    res.status(201).send();
    return;

    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error)
  }
}

export const updateProducts = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      // This error is show in console for developer
      // These are the known errors
      throw new NotFoundError("Product not found");
    }
    // product.name = req.body.name;
    // product.price = req.body.price;
    // product.description = req.body.description;
    // product.image = req.body.image;

    res.status(201).send(product)
    return;

    // If any error occur in try block, then catch this error.
  } catch (error) {
    // USing next(error), pass error to Error Middlware named global-error-handling-middleware.
    next(error);
  }
}