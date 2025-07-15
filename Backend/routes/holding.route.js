import express from "express"
import { Holding } from "../models/holding.models.js";
import isAuthenticated from "../utils/isAuthenticated.js";
import { Stock } from "../models/stock.models.js";
const router = express.Router();

router.get("/allHoldings", isAuthenticated , async (req, res) => {
    try{
        let id = req.id;
        let allHoldings = await Holding.find({user : id});
        let symbols = allHoldings.map((h) => h.name);

        let stocks = await Stock.find({symbol : {$in : symbols}})
        let stockMap = {}

        for(let stock of stocks){
            stockMap[stock.symbol] = stock;
        }
        
        let allValidHoldings = allHoldings.map((holding) => {
            let liveStock = stockMap[holding.name]

            return {
                ...holding.toObject(),
                price : liveStock.lastPrice,
                day : liveStock.dayChange
            }
        })

        return res.status(200).json({
            success : true,
            message : "Holdings is retrived!",
            allHoldings : allValidHoldings
        })

    }
    catch(e){
        return res.status(400).json({
            success : false,
            message : "Internal Server Error!"
        })
    }
});

export default router
