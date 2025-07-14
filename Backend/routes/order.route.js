import express from "express"
import { Order } from "../models/order.models.js";
import isAuthenticated from "../utils/isAuthenticated.js";
const router = express.Router();

router.get("/allOrders", isAuthenticated , async (req, res) => {
    let id = req.id;

    let allOrders = await Order.find({user : id});
    res.json({
        success: true,
        allOrders
    });
});

export default router
