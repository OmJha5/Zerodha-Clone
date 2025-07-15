import mongoose from "mongoose";
import User from "./user.models.js"

const holdingSchema = new mongoose.Schema({
    name : {type : String},
    qty : {type : Number},
    avg : {type : Number},
    price : {type : Number},
    net : {type : Number},
    day : {type : Number},
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
} , {timestamps : true})

const Holding = mongoose.model("Holding" , holdingSchema);
export {Holding};