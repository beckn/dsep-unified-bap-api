import { Schema, model, Types } from "mongoose";


interface IResume {
    user_id?: Types.ObjectId;
    document: string;
    document_type: string;
    active: Boolean;
    created_at: number;
    last_used_at: number;
    last_modified_at: number;
}

const resumeSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    document: { type: String, required: true },
    document_type: { type: String, required: true },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_used_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const Resume = model<IResume>("resumes", new Schema<IResume>(resumeSchema));

const models = {
    Resume,
};

export { models };