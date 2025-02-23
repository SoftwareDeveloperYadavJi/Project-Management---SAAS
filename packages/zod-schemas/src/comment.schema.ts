import { z } from "zod";



export const commentSchema = z.object({
    content: z.string().min(10, "Content must be at least 10 characters long"),
    taskId: z.string().uuid(),
    userId: z.string().uuid(),
});