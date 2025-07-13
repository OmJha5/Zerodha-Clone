import express from "express"
import User from "../models/user.models.js";
const router = express.Router();
import isAuthenticated from "../utils/isAuthenticated.js"

router.get("/viewfunds" , isAuthenticated , async(req , res) => {
    let id = req.id;
    let user = await User.findById(id);

    return res.status(200).json({
        success : true,
        availableMargin : user.availableMargin
    })
})

router.post("/addfunds" , isAuthenticated , async(req , res) => {
    let id = req.id;

    let user = await User.findById(id);
    let fund = Number(req.body.fund);
    let newFund = fund + user.availableMargin;

    await User.findByIdAndUpdate(id , {availableMargin : newFund} , {new : true});

    return res.status(200).json({
        success : true,
        availableMargin : newFund
    })
})

router.post("/withdrawfunds" , isAuthenticated , async(req , res) => {
    let id = req.id;

    let user = await User.findById(id);
    let fund = Number(req.body.fund);
    let newFund = user.availableMargin - fund;

    await User.findByIdAndUpdate(id , {availableMargin : newFund} , {new : true});

    return res.status(200).json({
        success : true,
        availableMargin : newFund
    })
})

export default router
