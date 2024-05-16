import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comments",
    initialState: null,
    reducers:{
        addComment: (state, action) => {
            state = action.payload;
        }
    }
})

export const {addComment} = commentSlice.actions;
export default commentSlice.reducer;
