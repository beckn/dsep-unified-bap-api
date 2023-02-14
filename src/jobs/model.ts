import { Schema, model, Types } from "mongoose";


interface IJob {
    job_id: string;
    company: String
    country: String;
    city: String;
    role: String;
    bpp_id: String;
    bpp_uri: String;
    location_type: string
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const JobSchema = {
    job_id: { type: String, required: false },
    comapny: {
        type: String,
        required: true,
    },
    country: { type: String, required: false },
    city: { type: String, required: false },
    role: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    location_type: { type: String, required: false },
    active: { type: Boolean, default: false },

    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Job = model<IJob>("jobs", new Schema<IJob>(JobSchema));

const models = {
    Job,
};

export { models, IJob };