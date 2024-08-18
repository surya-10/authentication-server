import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {database} from "./db connection/dbConnect.js"
import authrouter from "./controllers/user.control.js";
import { isAuth } from "./auth/isAuth.js";
import myData from "./controllers/resource.router.js";
dotenv.config()
let app = express();
app.use(cors());
app.use(express.json());

app.use("/", authrouter);
app.use("/all", isAuth, myData);
app.listen(process.env.port, ()=>{
    console.log("server created");
})

app.get("/", (req, res)=>{
    res.send("Hello !")
})