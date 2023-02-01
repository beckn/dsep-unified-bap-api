import { Request, Response, NextFunction } from "express";
import { models as user } from '.'

export const getUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email
        const data = await user.User.findOne({
            email: email
        })
        if (!data) {
            res.locals = {
                success: false,
                message: "User profile could not be retrieved"
            }
            return next()
        }
        res.locals = {
            data: data,
            success: true,
            message: "User profile is retrieved"
        }
        return next()
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/profile",
            message: e
        }
        return next()
    }
}

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        const data = await user.User.create({
            email: body.email,
            first_name: body.first_name,
            middle_name: body.middle_name,
            last_name: body.last_name,
            full_name: body.full_name,
            created_at: Date.now(),
            last_modified_at: Date.now()
        })
        if (!data) {
            res.locals = {
                success: false,
                message: "User profile could not be created"
            }
            return next()
        }
        res.locals = {
            data: data,
            success: true,
            message: "User has been created"
        }
        return next()
    }
    catch (e) {
        res.locals = {
            success: false,
            // path: "/user/profile",
            message: e
        }
        return next()
    }
}