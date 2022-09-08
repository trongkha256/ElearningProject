import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
    error: null,
}
export const loginAction = createAsyncThunk(
    "auth/login",
    async (values) => {
        try {
            const data = await authAPI.loginAction(values)
            //lưu thông in user xuống local storage
            localStorage.setItem("user", JSON.stringify(data))

            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(loginAction.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})
export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;