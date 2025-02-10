import { z } from "zod";

export const CategoryDTO = z.object({
  name: z.string().min(1, 'Name is required')
});

// export type CategoryDTO = {
//   name: string;
// };