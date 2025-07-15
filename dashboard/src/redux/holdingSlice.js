import { createSlice } from "@reduxjs/toolkit";

const holdingSlice = createSlice({
    name: "holding",
    initialState: {
        holdings : []
    },
    reducers: {
        setHoldings: (state, action) => {
            state.holdings = action.payload;
        },
    },
});

export const { setHoldings } = holdingSlice.actions;
export default holdingSlice.reducer;