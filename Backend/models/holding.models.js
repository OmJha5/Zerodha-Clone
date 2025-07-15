import mongoose from "mongoose";
import User from "./user.models.js"

// Only Store Fixed Values . Live values eg price , net change , day change calculate on the go
const holdingSchema = new mongoose.Schema({
    name : {type : String},
    qty : {type : Number},
    avg : {type : Number},
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
} , {timestamps : true})

const Holding = mongoose.model("Holding" , holdingSchema);
export {Holding};