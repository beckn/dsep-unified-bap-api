import { Schema, model, Types } from "mongoose";


interface IappliedScholarship {
    user_id?: Types.ObjectId;
    scholarship_id: string;
    provider_id: String;
    application_id: string;
    transiction_id: string;
    fulfillment_id: string;
    title: String;
    category: String;
    data: string;
    bpp_id: String;
    bpp_uri: String;
    created_at: number;
}

const appliedScholarshipSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    scholarship_id: { type: String, required: false },
    provider_id: {
        type: String,
        required: true,
    },
    application_id: { type: String, required: false },
    transiction_id: { type: String, required: false },
    fulfillment_id: { type: String, required: false },
    title: { type: String, required: false },
    category: { type: String, required: false },
    data: { type: String, required: false },
    bpp_id: { type: String, required: false },
    bpp_uri: { type: String, required: false },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const AppliedScholarships = model<IappliedScholarship>("applied_scholarships", new Schema<IappliedScholarship>(appliedScholarshipSchema));


export { AppliedScholarships };