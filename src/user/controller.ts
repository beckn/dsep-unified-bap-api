import { Request, Response, NextFunction } from "express";
import { models as user } from '.'
import { AppliedCourses } from "../models/applied_courses"
import { AppliedJobs } from "../models/applied_jobs";
import { AppliedMentorship } from "../models/applied_mentorships";
import { AppliedScholarships } from "../models/applied_scholarships";
import { SavedCourses } from "../models/saved_courses";
import { SavedJobs } from "../models/saved_jobs";
import { SavedMentorships } from "../models/saved_mentorships";
import { SavedScholarships } from "../models/saved_scholarships";
import { getUserDetails } from "./service";
import { ObjectId } from "mongodb";
import { models as resumes } from '../resumes'

export const UserDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDetails = await getUserDetails(req.params.email)
        if (!userDetails) {
            res.locals = {
                success: false,
                message: "User profile could not be retrieved"
            }
            return next()
        }
        return res.json(userDetails)
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/profile/email",
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
        return res.json(data)
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

export const savedItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDetails = await getUserDetails(req.params.email)
        if (!userDetails) {
            res.locals = {
                data: {},
                status: 404,
                success: false,
                message: "saved items not found for user"
            }
            return next()
        }
        const jobs = await SavedJobs.find({ user_id: userDetails?.id })
        const mentorship = await SavedMentorships.find({ user_id: userDetails?.id })
        const scholarship = await SavedScholarships.find({ user_id: userDetails?.id })
        const courses = await SavedCourses.find({ user_id: userDetails?.id })
        return res.json({ jobs, mentorship, scholarship, courses })
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/item/saved/email",
            message: e
        }
        return next()
    }
}

export const appliedItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDetails = await getUserDetails(req.params.email)
        if (!userDetails) {
            res.locals = {
                data: {},
                status: 404,
                success: false,
                message: "Applied items not found for user"
            }
            return next()
        }
        const jobs = await AppliedJobs.find({ user_id: userDetails?.id })
        const mentorship = await AppliedMentorship.find({ user_id: userDetails?.id })
        const scholarship = await AppliedScholarships.find({ user_id: userDetails?.id })
        const courses = await AppliedCourses.find({ user_id: userDetails?.id })

        return res.json({ jobs, mentorship, scholarship, courses })
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/item/applied/email",
            message: e
        }
        return next()
    }
}


export const items = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDetails = await getUserDetails(req.params.email)
        if (!userDetails) {
            res.locals = {
                data: {},
                status: 400,
                success: false,
                message: "User saved and applied data for dsep categories not found for sessionId"
            }
            return next()
        }
        const savedJobs = await SavedJobs.find({ user_id: userDetails?.id })
        const savedMentorship = await SavedMentorships.find({ user_id: userDetails?.id })
        const savedScholarship = await SavedScholarships.find({ user_id: userDetails?.id })
        const savedCourses = await SavedCourses.find({ user_id: userDetails?.id })
        const appliedJobs = await AppliedJobs.find({ user_id: userDetails?.id })
        const appliedMentorship = await AppliedMentorship.find({ user_id: userDetails?.id })
        const appliedScholarship = await AppliedScholarships.find({ user_id: userDetails?.id })
        const appliedCourses = await AppliedCourses.find({ user_id: userDetails?.id })
        return res.json({
            jobs: { save: savedJobs, applied: appliedJobs },
            courses: { save: savedCourses, applied: appliedCourses },
            scholarship: { save: savedScholarship, applied: appliedScholarship },
            mentorship: { save: savedMentorship, applied: appliedMentorship }
        })
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/items/email",
            message: e
        }
        return next()
    }
}

export const addResume = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        const data = await resumes.Resume.create({
            user_id: new ObjectId(req.body.user_id),
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
                message: "User resume could not be uploaded"
            }
            return next()
        }
        return res.json(data)
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/resume",
            message: e
        }
        return next()
    }
}

export const getResumeDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDetails = await getUserDetails(req.params?.email)
        if (!userDetails) {
            res.locals = {
                success: false,
                message: "User not found"
            }
            return next()
        }
        const data = await resumes.Resume.find({ user_id: userDetails?.id })
        if (!data) {
            res.locals = {
                success: false,
                message: "User profile could not be retrieved"
            }
            return next()
        }
        return res.json(data)
    }
    catch (e) {
        res.locals = {
            success: false,
            path: "/user/resume/email",
            message: e
        }
        return next()
    }
}