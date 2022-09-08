import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import courseAPI from "../Service/courseAPI";


const initialState = {
    courses: [],
    isLoading: false,
    error: null,
}

export const getCourseShowing = createAsyncThunk(
    'course/getCourseShowing',
    async () => {
        try {
            const data = await courseAPI.getCourseShowing();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCourseShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCourseShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.courses = payload;
        });
        builder.addCase(getCourseShowing.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})
export default courseSlice.reducer