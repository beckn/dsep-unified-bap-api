import { Schema, model, Types } from "mongoose";


interface IappliedScholarship {
    user_id?: Types.ObjectId;
    scholarship_id?: Types.ObjectId;
    created_at: number;
    last_modified_at: number;
}

const appliedScholarshipSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    scholarship_id: { type: Types.ObjectId, required: true, ref: "scholarships" },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const AppliedScholarships = model<IappliedScholarship>("applied_scholarships", new Schema<IappliedScholarship>(appliedScholarshipSchema));


export { AppliedScholarships };