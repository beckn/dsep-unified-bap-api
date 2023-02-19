import { Schema, model, Types } from "mongoose";


interface Imentorship {
    mentorship_id: string;
    mentor: String;
    provider_id: string;
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
    provider_id: { type: String, required: false },
    mentor: {
        type: String,
        required: true,
    },
    mentorRating: { type: String, required: false },
    mentorshipTitle: { type: String, required: false },
    data: { type: String, required: false },
    credentials: { type: String, required: false },
    experties: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const Mentorships = model<Imentorship>("mentorshis", new Schema<Imentorship>(mentorshipSchema));

export { Mentorships, Imentorship };