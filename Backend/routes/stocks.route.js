import express from "express"
import { Stock } from "../models/stock.models.js";
import isAuthenticated from "../utils/isAuthenticated.js";
import { Order } from "../models/order.models.js";
import { Holding } from "../models/holding.models.js";
const router = express.Router();

router.get("/allStocks" , isAuthenticated , async(req , res) => {
    try{
        let allStocks = await Stock.find({});

        return res.status(200).json({
            success : true,
            allStocks
        })
    }
    catch(e){
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }

})

router.post("/buyStock" , isAuthenticated , async(req , res) => {
    try{
        let {stock , qty , amount} = req.body;
        qty = Number(qty)
        amount = Number(amount);
        let id = req.id;

        let newOrder = await Order.create({
            name : stock.symbol,
            qty ,
            price : amount,
            mode : "Buy",
            user : id
        })

        let newHolding = await Holding.create({
            name : stock.symbol,
            qty,
            avg : amount,
            price : stock.lastPrice,
            net : (stock.lastPrice * qty) - (amount * qty),
            day : stock.dayChange,
            user : id
        })

        return res.status(200).json({
            message : "Successfully Bought the share!",
            success : true,
        })

    }
    catch(e){
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }
})

export default router;