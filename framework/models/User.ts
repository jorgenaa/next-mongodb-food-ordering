import mongoose, { model, models } from "mongoose";
const { Schema } = mongoose;
import { User } from "../common/types/user";
import validator from "validator";

const userSchema = new Schema<User>({
    name: {
        type: String,
    },
    email:  {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter valid email address"],
    },
    address: {
        type: String,
    },
    postNumber: {
        type: Number,
    },
    postSted: {
        type: String,
    },
    password: {
        type: String,    
    },
    resetToken: { type: String },
    update: { type: String },
    validEmail: { type: String, default: "not" },
    emailToken: { type: String },
},
{ timestamps: true }
);

export default models.User || model("User", userSchema)