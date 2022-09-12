import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}
export const getAcountDetail = createAsyncThunk(
    "acountDetail/getAccountDetail",
    async (values) => {
        try {
            const data = await authAPI.getAccountDetail(values)
            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const acountDetailSlice = createSlice({
    name: "acountDetail",
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAcountDetail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAcountDetail.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(getAcountDetail.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})


export default acountDetailSlice.reducer;