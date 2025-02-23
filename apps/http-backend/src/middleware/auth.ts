import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "No token provided",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET! || "secret");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Invalid token",
        });
    }
};

export default auth;