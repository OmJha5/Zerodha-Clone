import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import fundsSlice from "./fundSlice"
import holdingSlice from "./holdingSlice"
import orderSlice from "./orderSlice"

const store = configureStore({
    reducer : {
        auth : authSlice,
        funds : fundsSlice,
        order : orderSlice,
        holding : holdingSlice,
    }
})

export default store