import { Router } from "express";
import { register , login } from "../controllers/user.controller";
const userRouter : Router = Router();




userRouter.post("/register", register as any);
userRouter.post("/login", login as any);



export default userRouter;
