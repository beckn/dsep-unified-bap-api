import express, { Router } from "express";
import { response } from "../middleware/response";
import { addJob } from "./controller";
const router: Router = express.Router();



export const JobRoutes = () => {
    console.log('djdbjkdbjkbjb')
    router.post('/', addJob, response)
    return router
}