import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";


const initialState = {
    users: [],
    isLoading: false,
    error: null,
}

export const getUserShowing = createAsyncThunk(
    'user/getUserShowing',
    async () => {
        try {
            const data = await authAPI.getUserShowing();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (maKhachHang) => {
        try {
            const data = await authAPI.deleteUser(maKhachHang)
            console.log(data) // "Xóa thành công"
            return data
        }
        catch (error) {
            throw error;
        }
    }
)

export const createUser = createAsyncThunk(
    'user/createUser',
    async (userData) => {
        try {
            const data = await authAPI.createUser(userData)
            console.dir(data)
            return data
        } catch (error) {
            throw error;
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (userData) => {
        try {
            const data = await authAPI.updateUser(userData)
            console.dir(data)
            return data
        } catch (error) {
            throw error;
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUserShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.users = payload;
        });
        builder.addCase(getUserShowing.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.users = state.users.filter(user => user.taiKhoan !== payload)
        })
        builder.addCase(deleteUser.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.users = [payload, ...state.users]
        })
        builder.addCase(createUser.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.isLoading = false

            const index = state.users.findIndex(c => c.taiKhoan === payload.taiKhoan)
            if (index !== -1) {
                state.users[index] = payload;
            }
        })
        builder.addCase(updateUser.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})
export default userSlice.reducer