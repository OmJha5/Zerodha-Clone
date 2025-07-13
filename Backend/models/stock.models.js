import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  symbol: String,        // "TCS.NS"
  name: String,          // "Tata Consultancy Services"
  lastPrice: Number,     // 3500.45
  dayChange: Number,     // +1.2 (%)
});

const Stock = mongoose.model("Stock", stockSchema);
export { Stock };