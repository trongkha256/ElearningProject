import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contentAPI from "../Service/contentAPI";


const initialState = {
    contents: [],
    isLoading: false,
    error: null,
}

export const getContentShowing = createAsyncThunk(
    'ccontent/getContentShowing',
    async () => {
        try {
            const data = await contentAPI.getContentShowing();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getContentShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getContentShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.contents = payload;
        });
        builder.addCase(getContentShowing.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})
export default contentSlice.reducer