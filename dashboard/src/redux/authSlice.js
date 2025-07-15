import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        Menu : 0
    },
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload;
        },

        setMenu : (state , action) => {
            state.Menu = action.payload;
        }
    }
});

export const {setUser , setMenu} = authSlice.actions;
export default authSlice.reducer;