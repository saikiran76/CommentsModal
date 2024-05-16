import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comments",
    initialState:{
        comments: []
    },
    reducers:{
        addComment: (state, action) => {
            // state = action.payload;
            state.comments.push(action.payload);
        }
    }
})

export const {addComment} = commentSlice.actions;
export default commentSlice.reducer;
