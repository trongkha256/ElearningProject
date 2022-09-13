import { Button, Table } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, getUserShowing, updateUser } from '../../../../Slices/user';
import LoadingPage from '../../../LoadingPage/LoadingPage';


const ManageUser = () => {
    const dispatch = useDispatch()
    const { users, isLoading, error } = useSelector((state) => state.user);
    const [isUpdateForm, setIsUpdateForm] = useState(false)
    /*eslint-disable*/
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: "GP01",
            email: ""
        },
        mode: 'onTouched'
    })

    useEffect(() => {
        dispatch(getUserShowing())
    }, [])

    const resetFormData = () => {
        setValue("taiKhoan", "")
        setValue("matKhau", "")
        setValue("hoTen", "")
        setValue("soDT", "")
        setValue("maLoaiNguoiDung", "")
        setValue("maNhom", "GP01")
        setValue("email", "")
    }

    const cloneFormData = (user) => {
        setValue("taiKhoan", user.taiKhoan)
        setValue("matKhau", user.matKhau)
        setValue("hoTen", user.hoTen)
        setValue("soDT", user.soDT)
        setValue("maLoaiNguoiDung", user.maLoaiNguoiDung)
        setValue("maNhom", user.maNhom)
        setValue("email", user.email)
    }

    const makeHandleDeleteUser = (index) => () => {
        dispatch(deleteUser(users[index].taiKhoan))
        if (error != null) {
            alert(error.message);
        }
    }

    const makeHandleUpdateUser = (index) => () => {
        cloneFormData(users[index])
        setIsUpdateForm(true)
    }

    const handleCancelUpdateUser = () => {
        setIsUpdateForm(false)
        resetFormData()
    }

    const handleFormError = (error) => {
        console.error(error);
    };

    const handleFormSubmit = (value) => {
        const userData = { ...value }
        if (isUpdateForm) {
            dispatch(updateUser(userData))
            setIsUpdateForm(false)
        } else {
            dispatch(createUser(userData))
        }
        resetFormData()
    }

    return (
        <div style={{ paddingTop: "90px" }}>
            <div>
                <form onSubmit={handleSubmit(handleFormSubmit, handleFormError)}>
                    <h1 className="text-center text-3xl font-bold  pt-5 mb-5">{
                        isUpdateForm ?
                            "Cập nhật user"
                            :
                            "Them User"
                    }</h1>
                    <div>
                        <div className='flex justify-center align-middle'>
                            <div className="mb-6 mx-5 mt-10">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    Tai Khoan

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("taiKhoan", {
                                        required: {
                                            value: true,
                                            message: "Mật khẩu không được để trống",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5 mt-10  w-1/3">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    Ho ten

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("hoTen", {
                                        required: {
                                            value: true,
                                            message: "Mật khẩu không được để trống",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5 mt-10  w-1/4" >
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    Email

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="email" {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Mật khẩu không được để trống",
                                        },
                                    })} />
                            </div>

                        </div>
                        <div className='flex justify-center align-middle'>
                            <div className="mb-6 mx-5 w-1/4">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    Mat Khau

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="password" {...register("matKhau", {
                                        required: {
                                            value: true,
                                            message: "Mật khẩu không được để trống",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5 w-1/3">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    So Dien Thoai

                                </label>
                                <input
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" {...register("soDT", {
                                        required: {
                                            value: true,
                                            message: "Mật khẩu không được để trống",
                                        },
                                    })} />
                            </div>
                            <div className="mb-6 mx-5">
                                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                    Ma Loai Nguoi Dung
                                </label>
                                <select
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("maLoaiNguoiDung", { required: true })}>
                                    <option value="GV">Giao Vien</option>
                                    <option value="HV">Hoc Vien</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mb-5 gap-3'>
                        <Button type="submit">{
                            isUpdateForm ?
                                "Cập nhật User"
                                :
                                "Them User"
                        }</Button>
                        {isUpdateForm && (
                            <Button color="failure" onClick={handleCancelUpdateUser}>Hủy cập nhật</Button>
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
                                Tai Khoan

                            </Table.HeadCell>
                            <Table.HeadCell>
                                Ho Ten
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Email
                            </Table.HeadCell>
                            <Table.HeadCell>
                                So Dien Thoai
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Ma Loai Nguoi Dung
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
                            {users.map((user, index) =>
                                <Table.Row key={user.taiKhoan} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.taiKhoan}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.hoTen}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.email}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.soDT}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.maLoaiNguoiDung}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div
                                            onClick={makeHandleUpdateUser(index)}
                                            className="hover:cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Update
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div
                                            onClick={makeHandleDeleteUser(index)}
                                            className="hover:cursor-pointer font-medium text-red-600 hover:underline dark:text-blue-500"
                                        >
                                            Delete
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            )}

                        </Table.Body>
                    </Table>
                </div>
            }

        </div>
    );
};

export default ManageUser;