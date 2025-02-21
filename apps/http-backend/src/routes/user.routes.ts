import { Router } from "express";
import { register } from "../controllers/user.controller";
const userRouter : Router = Router();


userRouter.post("/register", register as any);

export default userRouter;
