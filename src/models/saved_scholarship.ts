import { Schema, model, Types } from "mongoose";


interface ISavedScholarship {
    user_id?: Types.ObjectId;
    scholarship_id?: Types.ObjectId;
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const savedScholarshipSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    scholarship_id: { type: Types.ObjectId, required: true, ref: "scholarships" },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const SavedScholarships = model<ISavedScholarship>("saved_scholarships", new Schema<ISavedScholarship>(savedScholarshipSchema));


export { SavedScholarships };
