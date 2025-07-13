import { createSlice } from "@reduxjs/toolkit";

const fundsSlice = createSlice({
    name: "funds",
    initialState: {
        availableMargin: 0
    },
    reducers: {
        setFunds: (state, action) => {
            state.availableMargin = action.payload;
        },
    },
});

export const { setFunds } = fundsSlice.actions;
export default fundsSlice.reducer;