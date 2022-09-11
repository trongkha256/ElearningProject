import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselSlider from '../../../Carousel/Carousel';

const AdminHome = () => {
    const navigate = useNavigate()

    const handleManageUsersButtonClick = () => {
        navigate('./quanLyNguoiDung')
    }

    const handleManageCoursesButtonClick = () => {
        navigate('./quanLyKhoaHoc')
    }

    return (
        <>
            <CarouselSlider />

            <div>
                <button onClick={handleManageUsersButtonClick}>Quản lý người dùng</button>
                <br />
                <button onClick={handleManageCoursesButtonClick}>Quản lý khóa học</button>
            </div>
        </>
    );
};

export default AdminHome;