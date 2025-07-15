import express from "express"
import { Stock } from "../models/stock.models.js";
import isAuthenticated from "../utils/isAuthenticated.js";
import { Order } from "../models/order.models.js";
import { Holding } from "../models/holding.models.js";
import User from "../models/user.models.js";
const router = express.Router();

router.get("/allStocks", isAuthenticated, async (req, res) => {
    try {
        let allStocks = await Stock.find({});

        return res.status(200).json({
            success: true,
            allStocks
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

})

router.post("/buyStock", isAuthenticated, async (req, res) => {
    try {
        let { stock, qty, amount , funds} = req.body;
        qty = Number(qty)
        amount = Number(amount);
        let id = req.id;

        let newOrder = await Order.create({
            name: stock.symbol,
            qty,
            price: amount,
            mode: "Buy",
            user: id
        })

        let newHolding = await Holding.create({
            name: stock.symbol,
            qty,
            avg: amount,
            price: stock.lastPrice,
            net: (stock.lastPrice * qty) - (amount * qty),
            day: stock.dayChange,
            user: id
        })

        let updatedUser = await User.findByIdAndUpdate(id , {availableMargin : funds - (qty * amount)} , {new : true});

        return res.status(200).json({
            message: "Successfully Bought the share!",
            success: true,
            availableMargin : updatedUser.availableMargin
        })

    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

router.post("/sellStock", isAuthenticated, async (req, res) => {
    try {
        let { stock, qty, amount , funds} = req.body;
        qty = Number(qty)
        amount = Number(amount);
        let id = req.id;

        let validHoldings = await Holding.find({ user: id, name: stock.symbol }).sort({ createdAt: 1 });

        let currentQty = 0;
        for (let lot of validHoldings) {
            currentQty += lot.qty;
        }

        if (qty > currentQty) {
            return res.status(400).json({
                success: false,
                message: "you can not sell more that what you have!"
            })
        }

        let sellQty = qty;

        // Step 2: loop over lots
        for (let lot of validHoldings) {
            if (sellQty <= 0) break;

            if (lot.qty <= sellQty) {
                // sell whole lot
                sellQty -= lot.qty;

                // set qty to 0 or remove lot
                await Holding.deleteOne({ _id: lot._id });
            }
            else {
                // sell part of this lot
                await Holding.updateOne({ _id: lot._id }, { $inc: { qty: -sellQty } });
                sellQty = 0;
            }
        }

        let updatedUser = await User.findByIdAndUpdate(id , {availableMargin : funds + (qty * amount)} , {new : true});

        let newOrder = await Order.create({
            name: stock.symbol,
            qty,
            price: amount,
            mode: "Sell",
            user: id
        })

        return res.status(200).json({
            success: true,
            message: "Successfully sold the shares!",
            availableMargin : updatedUser.availableMargin
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

export default router;