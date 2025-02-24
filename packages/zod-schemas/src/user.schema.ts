import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8).max(30).trim(),
    role: z.enum(["ADMIN", "USER"]),
    avatar: z.string().url(),
});