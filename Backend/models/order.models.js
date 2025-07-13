import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name : {type : String},
    qty : {type : Number},
    price : {type : Number},
    mode : {type : String},
})

const Order = mongoose.model("Order" , orderSchema);
export {Order};