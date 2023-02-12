import { Schema, model, Types } from "mongoose";


interface ISavedMentorship {
    user_id?: Types.ObjectId;
    mentorship_id?: Types.ObjectId;
    active: Boolean;
    slot: String;
    created_at: number;
    last_modified_at: number;
}

const savedMentorshipSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    mentorship_id: { type: Types.ObjectId, required: true, ref: "mentorships" },
    active: { type: Boolean, default: false },
    slot: { type: String, required: true },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const SavedMentorships = model<ISavedMentorship>("saved_mentorships", new Schema<ISavedMentorship>(savedMentorshipSchema));

const models = {
    SavedMentorships,
};

export { models };
