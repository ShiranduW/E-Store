import { z } from "zod";

export const ProductDTO = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.string().min(1, 'Price is required'),
  categoryId: z.string().min(1, 'Category ID is required')
});



