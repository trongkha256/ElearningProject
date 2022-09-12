import { configureStore } from '@reduxjs/toolkit'
import course from './Slices/course';
import auth from './Slices/auth';
import registerAuth from './Slices/registerAuth';
import content from './Slices/content';
import courseContent from './Slices/courseContent';
import courseDetail from './Slices/courseDetail';
import cart from './Slices/cart';
import acountDetail from './Slices/acountDetail';


const store = configureStore({
    reducer: {
        course,
        auth,
        registerAuth,
        content,
        courseContent,
        courseDetail,
        cart,
        acountDetail

    },
})

export default store;
