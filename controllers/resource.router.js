import User from "../modals/user.modal.js";
import express from "express";
import { findAllUsers } from "../Routers/user.router.js";
let myData = express.Router();


myData.get("/users", findAllUsers)
export default myData;