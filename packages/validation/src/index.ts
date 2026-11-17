import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(2),
    price: z.number().positive(),
    audience: z.array(
        z.enum([
            "men",
            "women",
            "boys",
            "girls",
            "senior",
            "pets"
        ])
    ),
    categoryId: z.string().min(1)
});

export type ProductInput = z.infer<
    typeof productSchema
>;