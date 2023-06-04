import express from "express";
import userRouter from "./routes/user.js";
// import dotenv from "dotenv"; //Use it like: 'dotenv.config()' or
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use("/users", userRouter); // We have given a custom URL prefix '/users' for all the URLs

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Now we have exported this file to server.js, So now we will be listening it in server.js. Therefore, below code is not required here but in server.js

// app.listen(4000, () => {
//   console.log("Server is working...");
// });
