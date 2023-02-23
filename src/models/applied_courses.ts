import { Schema, model, Types } from "mongoose";


interface Iappliedcourse {
    user_id?: Types.ObjectId;
    course_id: string;
    provider_id: String
    application_id: string;
    transaction_id: string;
    title: String;
    duration: String;
    course_url: String;
    bpp_id: String;
    bpp_uri: String;
    data: string;
    created_at: number;
}

const appliedCourseSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    course_id: { type: String, required: false },
    provider_id: {
        type: String,
        required: true,
    },
    application_id: { type: String, required: false },
    transaction_id: { type: String, required: false },
    title: { type: String, required: false },
    data: { type: String, required: false },
    duration: { type: String, required: false },
    courseUrl: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    created_at: { type: Number, required: false },

};

const AppliedCourses = model<Iappliedcourse>("applied_courses", new Schema<Iappliedcourse>(appliedCourseSchema));



export { AppliedCourses };
