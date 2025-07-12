import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./utils/db.js";

const app = express();
dotenv.config({})
let port = process.env.PORT || 4000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5173/"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/" , (request , response) => {
    response.send("This is my response")
})


app.listen(port , () => {
    connectDB();
    console.log(`App is listening on port ${port}`);
})