import express from "express";
import { client } from "@repo/db/client";

import { StatusCodes } from "http-status-codes";


const app = express();
const prisma = client;
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("Hello World");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});