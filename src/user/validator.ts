import { body } from "express-validator";
import { validate } from "../helper"
import { models as user } from "."

const createUser = () => {
    return validate([
        body("email")
            .isEmail()
            .withMessage("Invalid Email")
            .custom((value: string) => {
                return user.User.findOne({ email: value }).then((user) => {
                    if (user) {
                        return Promise.reject("Email already in use");
                    } else return true;
                });
            }),
        body("first_name").exists().withMessage("first name required"),
        body("last_name").exists().withMessage("last name is required")
    ]);
};
const createResume = () => {
    return validate([
        body("document").exists().withMessage("document is required"),
        body("document_type").exists().withMessage("document type is required")
    ]);
};
export const validator = {
    createUser,
    createResume
};