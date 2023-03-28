import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    emial: {
        type: String,
        required: true,
        unique: true,
    },
    password: { // going  to use bcrypt hash
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    businesses: [
        {type: Schema.Types.ObjectId, ref: "Business" }
    ]
});

export const User = (mongoose.model.User) || model("User", UserSchema);