import { Request, Response, NextFunction } from "express";
import { models as user } from '.'
import { AppliedCourses } from "../models/applied_course";
import { AppliedJobs } from "../models/applied_jobs";
import { AppliedMentorship } from "../models/applied_mentorship";
import { AppliedScholarships } from "../models/applied_scholarship";
import { SavedCourses } from "../models/saved_course";
import { SavedJobs } from "../models/saved_jobs";
import { SavedMentorships } from "../models/saved_mentorship";
import { SavedScholarships } from "../models/saved_scholarship";

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

export const SavedItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email
        const userDetails = await user.User.findOne({ email: email })
        const jobs = await SavedJobs.find({ user_id: userDetails?.id })
        const mentorship = await SavedMentorships.find({ user_id: userDetails?.id })
        const scholarship = await SavedScholarships.find({ user_id: userDetails?.id })
        const courses = await SavedCourses.find({ user_id: userDetails?.id })
        const data = { jobs, mentorship, scholarship, courses }
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

export const AppliedItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email
        const userDetails = await user.User.findOne({ email: email })
        const jobs = await AppliedJobs.find({ user_id: userDetails?.id })
        const mentorship = await AppliedMentorship.find({ user_id: userDetails?.id })
        const scholarship = await AppliedScholarships.find({ user_id: userDetails?.id })
        const courses = await AppliedCourses.find({ user_id: userDetails?.id })
        const data = { jobs, mentorship, scholarship, courses }
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

