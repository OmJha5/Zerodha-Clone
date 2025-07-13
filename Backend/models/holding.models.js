import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema({
    name : {type : String},
    qty : {type : Number},
    avg : {type : Number},
    price : {type : Number},
    net : {type : String},
    day : {type : String},
})

const Holding = mongoose.model("Holding" , holdingSchema);
export {Holding};