import { Request, Response, NextFunction } from "express";
import { models as jobs } from '.'

export const addJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await jobs.Job.create({
            job_id: '1',
            company: 'google',
            country: 'india',
            city: 'nashik',
            role: 'developer',
            bpp_id: '123456',
            bpp_uri: '43566',
            location_type: 'home',
            created_at: Date.now(),
            last_modified_at: Date.now()
        })
        if (!data) {
            res.locals = {
                success: false,
                message: "Job could not be created"
            }
            return next()
        }
        res.locals = {
            data: data,
            success: true,
            message: "JOb has been created"
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