import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import courseAPI from "../Service/courseAPI";


const initialState = {
    course: {},
    isLoading: false,
    error: null,
}

export const getCourseDetail = createAsyncThunk(
    'courseDetail/getCourseDetail',
    async (id) => {
        try {
            const data = await courseAPI.getCourseDetail(id);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const courseDetailSlice = createSlice({
    name: "courseDetail",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCourseDetail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCourseDetail.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.course = payload;
        });
        builder.addCase(getCourseDetail.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})
export default courseDetailSlice.reducer