import { z } from "zod";


export const taskSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters long"),
    description: z.string().min(10, "Description must be at least 10 characters long"),
    status: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
    dueDate: z.date().optional(),
    projectId: z.string().uuid(),
    assigneeId: z.string().uuid(),
});