import { z } from "zod";

export const commentFormSchema = z.object({
  content: z.string().min(5, "Content is required").max(500, "Content must be less than 500 characters"),
  postId: z.string().transform((val) => parseInt(val)).refine((val) => !isNaN(val)),
});