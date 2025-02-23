import { z } from "zod";


export const projectSchema = z.object({
    title: z.string().min(10, "Title must be at least 10 characters long"),
    description: z.string().min(30, "Description must be at least 30 characters long"),
    ownerId: z.string().uuid(),
    members: z.array(z.string().uuid()),
    tasks: z.array(z.string().uuid()),
});