import { Schema, model, Types } from "mongoose";


interface Icourses {
    course_id: string;
    provider: String
    title: String;
    duration: String;
    bpp_id: String;
    bpp_uri: String;
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const courseSchema = {
    course_id: { type: String, required: false },
    provider: {
        type: String,
        required: true,
    },
    title: { type: String, required: false },
    duration: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Courses = model<Icourses>("courses", new Schema<Icourses>(courseSchema));

const models = {
    Courses,
};

export { models, Icourses };