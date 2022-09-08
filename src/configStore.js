import { configureStore } from '@reduxjs/toolkit'
import course from './Slices/course';
import auth from './Slices/auth';
import registerAuth from './Slices/registerAuth';


const store = configureStore({
    reducer: {
        course,
        auth,
        registerAuth

    },
})

export default store;
