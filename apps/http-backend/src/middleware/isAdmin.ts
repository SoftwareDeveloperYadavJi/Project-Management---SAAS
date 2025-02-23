import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";


interface CustomRequest extends Request {
    user: {
        role: string;
    };
}

const isAdmin = (req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== "admin") {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "You are not authorized to access this route",
        });
    }
    next();
};

export default isAdmin;