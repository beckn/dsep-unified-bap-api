import { Request, Response, NextFunction } from "express";
import { models as resumes } from '.'
import { models as user } from "../user";

export const addResume = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        const data = await resumes.Resume.create({
            user_id: req.auth,
            document: body.document,
            document_type: body.document_type,
            active: false,
            created_at: Date.now(),
            last_used_at: Date.now(),
            last_modified_at: Date.now(),
        })
        if (!data) {
            res.locals = {
                success: false,
                message: "Resume could not be created"
            }
            return next()
        }
        res.locals = {
            data: data,
            success: true,
            message: "Resume has been created"
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

export const getResumeDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email
        const userDetails = await user.User.findOne({
            email: email
        })
        const data = await resumes.Resume.find({ user_id: userDetails?.id })
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