import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import fundsSlice from "./fundSlice"

const store = configureStore({
    reducer : {
        auth : authSlice,
        funds : fundsSlice
    }
})

export default store