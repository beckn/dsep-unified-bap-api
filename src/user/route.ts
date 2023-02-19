import express, { Router } from "express";
import { addResume, addUser, appliedItems, getResumeDetails, items, myItem, savedItems, UserDetails } from "./controller";
import { response } from "../middleware/response";
import { validator } from "./validator";
import { auth } from "../middleware/auth";
const router: Router = express.Router();



export const usersRoutes = () => {
    router.get("/profile/:email", UserDetails, response);
    router.post("/profile", validator.createUser(), addUser, response);
    router.get("/item/:email", items, response)
    router.get("/item/saved/:email", savedItems, response)
    router.get("/item/applied/:email", appliedItems, response);
    router.get("/resume/:email", getResumeDetails, response);
    router.post("/resume", validator.createResume(), addResume, response);
    router.post("/item/:category/:email/:action", myItem, response);
    return router
}