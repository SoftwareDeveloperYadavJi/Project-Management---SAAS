import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { client } from "@repo/db/client";
import { projectSchema } from "@repo/zod-schemas/src/project.schema";
const prisma = client;


interface porjectRequest extends Request {
    user: {
        id: string;
    };
}


export const createProject = async (req: porjectRequest, res: Response) => {
    try {
        const parsedBody = req.body;
        const projectExists = await prisma.project.findFirst({
            where: {
                title: parsedBody.title,
            },
            select: {
                id: true,
            },
        });
        if (projectExists) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Project already exists",
            });
        }
        const newProject = await prisma.project.create({
            data: {
                title: parsedBody.title,
                description: parsedBody.description,
                owner: {
                    connect: {
                        id: req.user.id,
                    },
                },
            },
        });
        res.status(StatusCodes.CREATED).json({
            message: "Project created successfully",
            data: {
                id: newProject.id,
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


export const getProjects = async (req: porjectRequest, res: Response) => {
    try {
        const projects = await prisma.project.findMany({
            where: {
                ownerId: req.user.id,
            },
        });
        res.status(StatusCodes.OK).json({
            message: "Projects fetched successfully",
            data: {
                projects,
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
