import express from "express";
import userRouter from "./routes/user.routes";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", userRouter);


app.listen(4000, () => {
  console.log("Server is running on port 4000");
});