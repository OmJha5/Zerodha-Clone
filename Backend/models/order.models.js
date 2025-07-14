import mongoose from "mongoose";
import User from "./user.models.js"

const orderSchema = new mongoose.Schema({
    name: { type: String },
    qty: { type: Number },
    price: { type: Number },
    mode: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Order = mongoose.model("Order", orderSchema);
export { Order };