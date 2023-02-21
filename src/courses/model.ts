import { Schema, model, Types } from "mongoose";


interface Icourses {
    course_id: string;
    provider_id: String
    application_id: string;
    title: String;
    duration: String;
    bpp_id: String;
    bpp_uri: String;
    active: Boolean;
    data: string;
    created_at: number;
    last_modified_at: number;
}

const courseSchema = {
    course_id: { type: String, required: false },
    provider_id: {
        type: String,
        required: true,
    },
    application_id: { type: String, required: false },
    title: { type: String, required: false },
    data: { type: String, required: false },
    duration: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Courses = model<Icourses>("courses", new Schema<Icourses>(courseSchema));

export { Courses, Icourses };