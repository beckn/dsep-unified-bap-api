import { Schema, model, Types } from "mongoose";


interface Imentorship {
    mentorship_id: string;
    mentor: String
    credentials: String;
    experties: String;
    bpp_id: String;
    bpp_uri: String;
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const mentorshipSchema = {
    mentorship_id: { type: String, required: false },
    mentor: {
        type: String,
        required: true,
    },
    credentials: { type: String, required: false },
    experties: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Mentorships = model<Imentorship>("mentorshis", new Schema<Imentorship>(mentorshipSchema));

const models = {
    Mentorships,
};

export { models, Imentorship };
