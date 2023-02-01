import { Schema, model, Types } from "mongoose";


interface IUser {
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    full_name: string;
    mobile: number;
    created_at: number;
    last_modified_at: number;
}

const UserSchema = {
    name: { type: String, required: false },
    email: {
        type: String,
        required: true,
    },
    first_name: { type: String, required: false },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: false },
    full_name: { type: String, required: false },
    mobile: { type: Number, required: false },
    created_at: { type: Number, required: false },
    last_modified_at: { type: Number, required: false }
};

const User = model<IUser>("users", new Schema<IUser>(UserSchema));

const models = {
    User,
};

export { models, IUser };
