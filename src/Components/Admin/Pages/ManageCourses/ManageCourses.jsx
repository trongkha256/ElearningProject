import { Button, Table } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, deleteCourse, getCourseShowing, updateCourse } from '../../../../Slices/course';
import LoadingPage from '../../../LoadingPage/LoadingPage';


const ManageCourses = () => {
    const dispatch = useDispatch()
    const { courses, isLoading, error } = useSelector((state) => state.course);
    const { user } = useSelector(state => state.auth)
    const [isUpdateForm, setIsUpdateForm] = useState(false)
    /*eslint-disable*/
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
        if (error!=null){
            alert(error.message)
        }
        
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
                    <h1 className="text-center text-3xl font-bold  pt-5 mb-5">{
                        isUpdateForm ?
                            "C???p nh???t kh??a h???c"
                            :
                            "Them Khoa Hoc"
                    }</h1>
                    <div>
                        <div className='flex justify-center align-middle'>
                            <div className="mb-6 mx-5 mt-10">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    M?? Kh??a h???c

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("maKhoaHoc", {
                                        required: {
                                            value: true,
                                            message: "M???t kh???u kh??ng ???????c ????? tr???ng",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5 mt-10  w-1/3">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    B?? Danh

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("biDanh", {
                                        required: {
                                            value: true,
                                            message: "M???t kh???u kh??ng ???????c ????? tr???ng",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5 mt-10  w-1/4" >
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    T??n Kho?? H???c

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("tenKhoaHoc", {
                                        required: {
                                            value: true,
                                            message: "M???t kh???u kh??ng ???????c ????? tr???ng",
                                        },
                                    })} />
                            </div>

                        </div>
                        <div className='flex justify-center align-middle'>
                            <div className="mb-6 mx-5 w-1/2">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    M?? t???

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("moTa", {
                                        required: {
                                            value: true,
                                            message: "M???t kh???u kh??ng ???????c ????? tr???ng",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    Danh m???c kh??a h???c
                                </label>
                                <select
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("maDanhMucKhoaHoc", { required: true })}>
                                    <option value="BackEnd">L???p tr??nh Backend</option>
                                    <option value="Design">Thi???t k??? Web</option>
                                    <option value="DiDong">L???p tr??nh di ?????ng</option>
                                    <option value="FrontEnd">L???p tr??nh Front end</option>
                                    <option value="FullStack">L???p tr??nh Full Stack</option>
                                    <option value="TuDuy">T?? duy l???p tr??nh</option>
                                </select>
                                {/* 
                                <input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("maDanhMucKhoaHoc", {
                                        required: {
                                            value: true,
                                            message: "M???t kh???u kh??ng ???????c ????? tr???ng",
                                        },
                                    })} /> */}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mb-5 gap-3'>
                        <Button type="submit">{
                            isUpdateForm ?
                                "C???p nh???t kh??a h???c"
                                :
                                "Them Khoa Hoc"
                        }</Button>
                        {isUpdateForm && (
                            <Button color="failure" onClick={handleCancelUpdateCourse}>H???y c???p nh???t</Button>
                        )}
                    </div>
                </form>
            </div>

            {isLoading
                ?
                <LoadingPage />
                :
                <div>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                M?? kh??a h???c

                            </Table.HeadCell>
                            <Table.HeadCell>
                                T??n kh??a h???c
                            </Table.HeadCell>
                            <Table.HeadCell>
                             Danh m???c kh??a h???c
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Ng??y t???o
                            </Table.HeadCell>
                            <Table.HeadCell>
                                So luong hoc vien
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Update
                                </span>

                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Delete
                                </span>

                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {courses.map((course, index) =>
                                <Table.Row key={course.maKhoaHoc} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {course.maKhoaHoc}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {course.tenKhoaHoc}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {course.tenKhoaHoc}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {course.ngayTao}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {course.soLuongHocVien}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div
                                            onClick={makeHandleUpdateCourse(index)}
                                            className="hover:cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Update
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div
                                            onClick={makeHandleDeleteCourse(index)}
                                            className="hover:cursor-pointer font-medium text-red-600 hover:underline dark:text-blue-500"
                                        >
                                            Delete
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            )}

                        </Table.Body>
                    </Table>
                    {/* <table>
                        <tr>
                            <th>Ma Khoa Hoc</th>
                            <th>Bi Danh</th>
                            <th>Ten Khoa Hoc</th>
                            <th>Luot Xem</th>
                            <th>Ngay Tao</th>
                            <th>Ma Nhom</th>
                            <th>So Luong Hoc Vien</th>
                            <th></th>
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
                            <tr className='pb-5' key={maKhoaHoc}>
                                <th>{maKhoaHoc}</th>
                                <th>{biDanh}</th>
                                <th>{tenKhoaHoc}</th>
                                <th>{luotXem}</th>
                                <th>{ngayTao}</th>
                                <th>{maNhom}</th>
                                <th>{soLuongHocVien}</th>
                                <th>
                                    <Button size="xs" onClick={makeHandleUpdateCourse(index)}>Update</Button>

                                </th>
                                <th>
                                    <Button size="xs" onClick={makeHandleDeleteCourse(index)}>Delete</Button>
                                </th>
                            </tr>
                        ))}
                    </table> */}
                </div>
            }

        </div>
    );
};

export default ManageCourses;