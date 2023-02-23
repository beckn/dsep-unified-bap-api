import { Schema, model, Types } from "mongoose";


interface IappliedJobs {
    user_id?: Types.ObjectId;
    job_id: string;
    company: string;
    provider_id: string;
    application_id: string;
    transaction_id: string;
    city: string;
    role: string;
    bpp_id: string;
    bpp_uri: String;
    data: string;
    created_at: number;
}

const appliedJobSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    job_id: { type: String, required: false },
    comapny: {
        type: String,
        required: true,
    },
    provider_id: { type: String, required: false },
    application_id: { type: String, required: false },
    transaction_id: { type: String, required: false },
    city: { type: String, required: false },
    role: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    data: { type: String, required: false },
    created_at: { type: Number, required: false },



};

const AppliedJobs = model<IappliedJobs>("applied_jobs", new Schema<IappliedJobs>(appliedJobSchema));



export { AppliedJobs };
