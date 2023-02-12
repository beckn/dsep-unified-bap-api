import { Schema, model, Types } from "mongoose";


interface ISavedCourse {
    user_id?: Types.ObjectId;
    course_id?: Types.ObjectId;
    active: Boolean
    created_at: number;
    last_modified_at: number;
}

const savedCourseSchema = {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    course_id: { type: Types.ObjectId, required: true, ref: "courses" },
    active: { type: Boolean, default: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }

};

const SavedCourses = model<ISavedCourse>("saved_courses", new Schema<ISavedCourse>(savedCourseSchema));

const models = {
    SavedCourses,
};

export { models };
