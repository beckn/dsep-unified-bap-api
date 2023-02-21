import { Schema, model, Types } from "mongoose";


interface IJob {
    job_id: string;
    company: string;
    provider_id: string;
    application_id: string;
    city: string;
    role: string;
    bpp_id: string;
    bpp_uri: String;
    data: string;
    location_type: string;
    active: boolean;
    created_at: number;
    last_modified_at: number;
}

const JobSchema = {
    job_id: { type: String, required: false },
    comapny: {
        type: String,
        required: true,
    },
    provider_id: { type: String, required: false },
    application_id: { type: String, required: false },
    city: { type: String, required: false },
    role: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    data: { type: String, required: false },
    location_type: { type: String, required: false },
    active: { type: Boolean, default: false },

    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Job = model<IJob>("jobs", new Schema<IJob>(JobSchema));



export { Job, IJob };




