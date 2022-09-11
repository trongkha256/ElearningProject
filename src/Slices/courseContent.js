import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contentAPI from "../Service/contentAPI";


const initialState = {
    courses: [],
    isLoading: false,
    error: null,
}

export const getCourseContentShowing = createAsyncThunk(
    'courseContent/getCourseContent',
    async (contentId) => {
        try {
            const data = await contentAPI.getCourseContent(contentId);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const courseContentSlice = createSlice({
    name: "courseContent",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCourseContentShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCourseContentShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.courses = payload;
        });
        builder.addCase(getCourseContentShowing.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})
export default courseContentSlice.reducer