import { Schema, model, Types } from "mongoose";


interface Ischolarship {
    scholarship_id: string;
    provider: String
    title: String;
    criteria: String;
    bpp_id: String;
    bpp_uri: String;
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const scholarshipSchema = {
    scholarship_id: { type: String, required: false },
    provider: {
        type: String,
        required: true,
    },
    title: { type: String, required: false },
    criteria: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Scholarships = model<Ischolarship>("scholarships", new Schema<Ischolarship>(scholarshipSchema));

const models = {
    Scholarships,
};

export { models, Ischolarship };