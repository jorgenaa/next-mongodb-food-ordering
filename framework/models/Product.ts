
import mongoose, { model, models } from "mongoose";
const { Schema } = mongoose;
import { Product } from "../common/types/product";

const productSchema = new Schema<Product>({
    _id: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },
    description:  {
        type: String,
        required: true,
        maxlength: 200,
    },
    img: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    extraInfo: {
        type: String,
        required: true,
    },
    icon: {
        type: Boolean, 
        required: true,
    }
},
{ timestamps: true }
);

export default models.Product ||  model("Product", productSchema)