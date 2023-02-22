import { Schema, model, Types } from "mongoose";


interface IAppliedMentorship {
    user_id?: Types.ObjectId;
    mentorship_id: string;
    mentor: String;
    mentorRating: string;
    mentorshipTitle: string;
    provider_id: string;
    application_id: string;
    transiction_id: string;
    mentorshipSession_id: string;
    mentorshipSessionJoinLink: string;
    credentials: String;
    bpp_id: String;
    bpp_uri: String;
    created_at: number;
}

const appliedMentorshipSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    mentorship_id: { type: String, required: false },
    provider_id: { type: String, required: false },
    application_id: { type: String, required: false },
    transiction_id: { type: String, required: false },
    mentorshipSession_id: { type: String, required: false },
    mentor: {
        type: String,
        required: true,
    },
    mentorRating: { type: String, required: false },
    mentorshipTitle: { type: String, required: false },
    data: { type: String, required: false },
    mentorshipSessionJoinLink: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    created_at: { type: Number, required: false },

};

const AppliedMentorship = model<IAppliedMentorship>("applied_mentorships", new Schema<IAppliedMentorship>(appliedMentorshipSchema));



export { AppliedMentorship };