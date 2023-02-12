import express, { Router } from "express";
import { JobRoutes } from "../jobs";
import { usersRoutes } from "../user"

const router: Router = express.Router();

export const routes = () => {
    console.log('gggggg');
    router.use("/user1", usersRoutes());
    router.use("/job", JobRoutes());
    return router;
};
