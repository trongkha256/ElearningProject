import { configureStore } from '@reduxjs/toolkit'
import course from './Slices/course';
import auth from './Slices/auth';
import registerAuth from './Slices/registerAuth';
import content from './Slices/content';
import courseContent from './Slices/courseContent';


const store = configureStore({
    reducer: {
        course,
        auth,
        registerAuth,
        content,
        courseContent

    },
})

export default store;
