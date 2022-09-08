import { configureStore } from '@reduxjs/toolkit'
import course from './Slices/course';


const store = configureStore({
    reducer: {
        course,


    },
})

export default store;
