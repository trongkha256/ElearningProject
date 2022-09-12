import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, deleteCourse, getCourseShowing, updateCourse } from '../../../../Slices/course';
import LoadingPage from '../../../LoadingPage/LoadingPage';


const ManageCourses = () => {
    const dispatch = useDispatch()
    const { courses, isLoading } = useSelector((state) => state.course);
    const { user } = useSelector(state => state.auth)
    const [isUpdateForm, setIsUpdateForm] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: {
            maKhoaHoc: "",
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "image.png",
            maNhom: "GP01",
            ngayTao: new Date().toLocaleDateString('vi'),
            maDanhMucKhoaHoc: "",
            taiKhoanNguoiTao: user.taiKhoan
        },
        mode: 'onTouched'
    })

    useEffect(() => {
        dispatch(getCourseShowing())
    }, [])

    const resetFormData = () => {
        setValue("maKhoaHoc", "")
        setValue("biDanh", "")
        setValue("tenKhoaHoc", "")
        setValue("moTa", "")
        setValue("luotXem", 0)
        setValue("danhGia", 0)
        setValue("hinhAnh", "image.png")
        setValue("maNhom", "GP01")
        setValue("ngayTao", "")
        setValue("maDanhMucKhoaHoc", "")
        setValue("taiKhoanNguoiTao", user.taiKhoan)
    }

    const cloneFormData = (course) => {
        setValue("maKhoaHoc", course.maKhoaHoc)
        setValue("biDanh", course.biDanh)
        setValue("tenKhoaHoc", course.tenKhoaHoc)
        setValue("moTa", course.moTa)
        setValue("luotXem", course.luotXem)
        setValue("danhGia", course.danhGia)
        setValue("hinhAnh", course.hinhAnh)
        setValue("maNhom", course.maNhom)
        setValue("ngayTao", course.ngayTao)
        setValue("maDanhMucKhoaHoc", course.danhMucKhoaHoc.maDanhMucKhoahoc)
        setValue("taiKhoanNguoiTao", course.nguoiTao.taiKhoan)
    }

    const makeHandleDeleteCourse = (index) => () => {
        dispatch(deleteCourse(courses[index].maKhoaHoc))
    }

    const makeHandleUpdateCourse = (index) => () => {
        cloneFormData(courses[index])
        setIsUpdateForm(true)
    }

    const handleCancelUpdateCourse = () => {
        setIsUpdateForm(false)
        resetFormData()
    }

    const handleFormError = (error) => {
        console.error(error);
    };

    const handleFormSubmit = (value) => {
        const courseData = { ...value, ngayTao: new Date().toLocaleDateString('vi') }
        if (isUpdateForm) {
            dispatch(updateCourse(courseData))
            setIsUpdateForm(false)
        } else {
            dispatch(createCourse(courseData))
        }
        resetFormData()
    }

    return (
        <div style={{ paddingTop: "90px" }}>
            <div>
                <form onSubmit={handleSubmit(handleFormSubmit, handleFormError)}>
                    <h1>{
                        isUpdateForm ?
                            "Cập nhật khóa học"
                            :
                            "Them Khoa Hoc"
                    }</h1>

                    <label>
                        Mã Khóa học
                        <input type="text" {...register("maKhoaHoc", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được để trống",
                            },
                        })} />
                    </label>

                    <label>
                        Bí Danh
                        <input type="text" {...register("biDanh", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được để trống",
                            },
                        })} />
                    </label>

                    <label>
                        Tên Khoá Học
                        <input type="text" {...register("tenKhoaHoc", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được để trống",
                            },
                        })} />
                    </label>

                    <label>
                        Mô tả
                        <input type="text" {...register("moTa", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được để trống",
                            },
                        })} />
                    </label>

                    <label>
                        Danh mục khóa học
                        <input type="text" {...register("maDanhMucKhoaHoc", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được để trống",
                            },
                        })} />
                    </label>

                    <button type="submit">{
                        isUpdateForm ?
                            "Cập nhật khóa học"
                            :
                            "Them Khoa Hoc"
                    }</button>
                    <br />
                    {isUpdateForm && (
                        <button onClick={handleCancelUpdateCourse}>Hủy cập nhật</button>
                    )}
                </form>
            </div>

            {isLoading
                ?
                <LoadingPage />
                :
                <div>
                    <table>
                        <tr>
                            <th>Ma Khoa Hoc</th>
                            <th>Bi Danh</th>
                            <th>Ten Khoa Hoc</th>
                            <th>Luot Xem</th>
                            <th>Ngay Tao</th>
                            <th>Ma Nhom</th>
                            <th>So Luong Hoc Vien</th>
                            <th></th>
                        </tr>

                        {courses.map((
                            {
                                maKhoaHoc,
                                biDanh,
                                tenKhoaHoc,
                                luotXem,
                                ngayTao,
                                maNhom,
                                soLuongHocVien
                            },
                            index
                        ) => (
                            <tr key={maKhoaHoc}>
                                <th>{maKhoaHoc}</th>
                                <th>{biDanh}</th>
                                <th>{tenKhoaHoc}</th>
                                <th>{luotXem}</th>
                                <th>{ngayTao}</th>
                                <th>{maNhom}</th>
                                <th>{soLuongHocVien}</th>
                                <th>
                                    <button onClick={makeHandleUpdateCourse(index)}>Update</button>
                                    <button onClick={makeHandleDeleteCourse(index)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </table>
                </div>
            }

        </div>
    );
};

export default ManageCourses;