import express, { Router } from "express";
import { addUser, getUserDetails } from "./controller";
import { response } from "../middleware/response";
import { validator } from "./validator";
const router: Router = express.Router();



export const usersRoutes = () => {
    router.get("/profile/:email", getUserDetails);
    router.post("/profile", validator.createUser(), addUser, response);
    return router
}