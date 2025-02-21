import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { client } from "@repo/db/client";
import jwt from "jsonwebtoken";
import  {userSchema}  from "@repo/zod-schemas/src/user.schema";
const prisma = client;


export const register = async (req: Request, res: Response) => {
    try {
        const parsedBody = userSchema.parse(req.body);
        const userExists = await prisma.user.findFirst({
            where: {
                email: parsedBody.email,
            },
            select: {
                id: true,
            },
        });
        if (userExists) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "User already exists",
            });
        }
        const newUser = await prisma.user.create({
            data: {
                email: parsedBody.email,
                password: parsedBody.password,
                name: parsedBody.name,
                role: parsedBody.role,
                avatar: parsedBody.avatar,
            }
        });
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET! || "secret", {
            expiresIn: "1d",    // 1 day
        });
        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            data: {
                token,
            },
        });
        return;
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Invalid request",
        });
    }
};




