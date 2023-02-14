import { Schema, model, Types } from "mongoose";


interface IappliedJobs {
    user_id?: Types.ObjectId;
    job_id?: Types.ObjectId;
    created_at: number;
    last_modified_at: number;
}

const appliedJobSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    job_id: { type: Types.ObjectId, required: true, ref: "jobs" },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const AppliedJobs = model<IappliedJobs>("applied_jobs", new Schema<IappliedJobs>(appliedJobSchema));



export { AppliedJobs };