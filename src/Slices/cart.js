import {createSlice } from "@reduxjs/toolkit";


const initialState = {
    courses: JSON.parse(localStorage.getItem("cart")) || [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,{payload})=>{
            const courses=[...state.courses,payload]
            localStorage.setItem("cart", JSON.stringify(courses))
            return {...state,courses}
        },
        deleteCart: (state,{payload})=>{
            localStorage.removeItem("cart");
            const courses=state.courses.filter((course)=>course.maKhoaHoc !== payload.maKhoaHoc)
            localStorage.setItem("cart", JSON.stringify(courses))
            return {...state,courses}
        }
    }
})

export const { addToCart,deleteCart } = cartSlice.actions

export default cartSlice.reducer