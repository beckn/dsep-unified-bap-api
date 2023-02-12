import { Schema, model, Types } from "mongoose";


interface Iappliedcourse {
    user_id?: Types.ObjectId;
    course_id?: Types.ObjectId;
    created_at: number;
    last_modified_at: number;
}

const appliedCourseSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    course_id: { type: Types.ObjectId, required: true, ref: "courses" },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const AppliedCourses = model<Iappliedcourse>("applied_courses", new Schema<Iappliedcourse>(appliedCourseSchema));

const models = {
    AppliedCourses,
};

export { models };
