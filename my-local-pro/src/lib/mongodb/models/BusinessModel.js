import mongoose, { model, Schema } from "mongoose";

const BusinessSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    aboutMe: {
        type: String,
        required: true,
    },
    pictures: [{type: String}],
    reviews: [{type: Schema.Types.ObjectId, ref: "Review"}],
    fiveStars: {
        type: Number,
        default: 0
    },
    fourStars: {
        type: Number,
        default: 0
    },
    threeStars: {
        type: Number,
        default: 0
    },
    twoStars: {
        type: Number,
        default: 0
    },
    OneStars: {
        type: Number,
        default: 0
    },
});

export const Business = (mongoose.model.Business) || model("Business", BusinessSchema);