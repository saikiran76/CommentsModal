import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comments",
    initialState: {
        comments: []
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload);
        },
        updateComment: (state, action) => {
            const { index, text } = action.payload;
            state.comments[index] = text;
        }
    }
});

export const { addComment, updateComment } = commentSlice.actions;
export default commentSlice.reducer;
