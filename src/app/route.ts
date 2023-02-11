import express, { Router } from "express";
import { usersRoutes } from "../user"

const router: Router = express.Router();

export const routes = () => {
    router.use("/user", usersRoutes());
    return router;
};
