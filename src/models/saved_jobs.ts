import { Schema, model, Types } from "mongoose";


interface IsavedJobs {
    user_id?: Types.ObjectId;
    job_id?: Types.ObjectId;
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const savedJobSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    job_id: { type: Types.ObjectId, required: true, ref: "jobs" },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const SavedJobs = model<IsavedJobs>("saved_jobs", new Schema<IsavedJobs>(savedJobSchema));

const models = {
    SavedJobs,
};

export { models, SavedJobs };
