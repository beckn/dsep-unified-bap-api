import { Schema, model, Types } from "mongoose";


interface IAppliedMentorship {
    user_id?: Types.ObjectId;
    mentorship_id?: Types.ObjectId;
    active: Boolean;
    slot: String;
    created_at: number;
    last_modified_at: number;
}

const appliedMentorshipSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    mentorship_id: { type: Types.ObjectId, required: true, ref: "mentorships" },
    active: { type: Boolean, default: false },
    slot: { type: String, required: true },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const AppliedMentorship = model<IAppliedMentorship>("applied_mentorships", new Schema<IAppliedMentorship>(appliedMentorshipSchema));

const models = {
    AppliedMentorship,
};

export { models };
