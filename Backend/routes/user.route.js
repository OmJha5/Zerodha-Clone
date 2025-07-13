import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/user.models.js";

router.post("/signin" , async(req , res) => {
    try{
        const {email , password} = req.body;
        if(!email || !password) {
            return res.status(400).json({
                message : "Something is missing!",
                success : false
            })
        }

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message : "Incorrect Email Or Password",
                success : false,
            })
        }

        let status = await bcrypt.compare(password , user.password)
        if(!status){
            return res.status(400).json({
                message : "Incorrect Email Or Password",
                success : false,
            })
        }

        const tokenData = {
            email : user.email,
            name : user.name,
        }

        const token = jwt.sign(tokenData , process.env.SECRET_KEY , {expiresIn : "7d"})

        user = {
            _id : user._id,
            email : user.email,
            name : user.name,
        }
        
        return res.status(200).cookie("zeroddhaToken" , token , {maxAge : 7 * 24 * 60 * 60 * 1000 , httpOnly:true , sameSite:process.env.NODE_ENV=="production" ? "none" : "lax" , secure:process.env.NODE_ENV=="production"}).json({
            user: user,
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal Server Error",
            success : false
        })
    }
})

router.get("/logout" , async(req , res) => {
    try{
        return res.status(200).cookie("zeroddhaToken" , "" , {maxAge:0 , httpOnly : true , ameSite:process.env.NODE_ENV=="production" ? "none" : "lax" , secure:process.env.NODE_ENV=="production"}).json({
            message : "Logged Out Successfully!",
            success : true
        })
    }
    catch(e){
        console.log(e)
    }
})

router.post("/signup" , async(req , res) => {
    try{
        const {name , email , password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({
                message : "Something is missing",
                success : false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message : "User already exist with this email",
                success : false,
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        const newUser = await User.create({
            name , email , password : hashedPassword
        })
        
        await newUser.save();

        const tokenData = {
            email : newUser.email,
            name : newUser.name,
        }

        const token = jwt.sign(tokenData , process.env.SECRET_KEY , {expiresIn : "7d"})

        let finalUser = {
            _id : newUser._id,
            email : newUser.email,
            name : newUser.name,
        }
        
        return res.status(200).cookie("zeroddhaToken" , token , {maxAge : 7 * 24 * 60 * 60 * 1000 , httpOnly:true , sameSite:process.env.NODE_ENV=="production" ? "none" : "lax" , secure:process.env.NODE_ENV=="production"}).json({
            user: finalUser,
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal server error",
            success : false
        })
    }
})

router.get("/checkuser" , async(req , res) => {
    try{
        let token = req.cookies.zeroddhaToken

        if(!token){
            return res.status(401).json({
                message : "Token Expired, Please login!",
                success : false
            })
        }

        const decode =  jwt.verify(token , process.env.SECRET_KEY)
        if(!decode){
            return res.status(401).json({
                message : "Invalid Token",
                success : false
            })
        }

        res.status(200).json({
            name : decode.name,
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal Server Error",
            success : false
        })
    }
})

export default router
