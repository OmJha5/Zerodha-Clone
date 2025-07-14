import express from "express"
import { Holding } from "../models/holding.models.js";
import isAuthenticated from "../utils/isAuthenticated.js";
const router = express.Router();

router.get("/allHoldings", isAuthenticated , async (req, res) => {
    let id = req.id;

    let allHoldings = await Holding.find({user : id});
    res.json({
        success: true,
        allHoldings
    });
});

export default router
