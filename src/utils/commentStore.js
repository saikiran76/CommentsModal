import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        comments:commentSlice,
        user: userSlice
        
    }
})

export default store;