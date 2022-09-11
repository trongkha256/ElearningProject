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

export const deleteCourse = createAsyncThunk(
    'course/deleteCourse',
    async (maKhoaHoc) => {
        try {
            const data = await courseAPI.deleteCourse(maKhoaHoc)
            console.log(data) // "Xóa thành công"
            return maKhoaHoc
        }
        catch (error) {
            throw error;
        }
    }
)

export const createCourse = createAsyncThunk(
    'course/createCourse',
    async (courseData) => {
        try {
            const data = await courseAPI.createCourse(courseData)
            console.dir(data)
            return data
        } catch (error) {
            throw error;
        }
    }
)

export const updateCourse = createAsyncThunk(
    'course/updatecourse',
    async (courseData) => {
        try {
            const data = await courseAPI.updateCourse(courseData)
            console.dir(data)
            return data
        } catch (error) {
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

        builder.addCase(deleteCourse.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteCourse.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.courses = state.courses.filter(course => course.maKhoaHoc !== payload)
        })
        builder.addCase(deleteCourse.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

        builder.addCase(createCourse.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createCourse.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.courses = [payload, ...state.courses]
        })
        builder.addCase(createCourse.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

        builder.addCase(updateCourse.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateCourse.fulfilled, (state, { payload }) => {
            state.isLoading = false

            const index = state.courses.findIndex(c => c.maKhoaHoc === payload.maKhoaHoc)
            if (index != -1) {
                state.courses[index] = payload;
            }
        })
        builder.addCase(updateCourse.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})
export default courseSlice.reducer