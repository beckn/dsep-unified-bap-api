import express, { Router } from "express";
import { addUser, UserDetails } from "./controller";
import { response } from "../middleware/response";
import { validator } from "./validator";
const router: Router = express.Router();



export const usersRoutes = () => {
    router.get("/profile/:email", UserDetails);
    router.post("/profile", addUser, response);
    return router
}