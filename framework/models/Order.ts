import { model, models, Schema } from "mongoose";
import { Order } from "../common/types/order";

const OrderSchema = new Schema<Order>({
    custommer: {
        type: String,
        required: true,
        maxlength: 60,
    },
    address:  {
        type: String,
        required: true,
        maxlength: 200,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    method: {
        type: Number,
        required: true,
    },
},
    { timestamps: true }
);

export default models.Order ||  model("Order", OrderSchema)