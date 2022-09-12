import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../Slices/cart';

const Cart = () => {
    const [pay, setPay] = useState({
        price: 0,
        course: []
    })
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.cart)
    const handleAddToPay = (courseItem) => {
        const course = [...pay.course, courseItem]
        setPay({ ...pay, course })
    }
    const haddlePay=()=>{
        pay.course.map((c)=>dispatch(deleteCart(c)))
        setPay({price: 0, course:[]})
    }
    const handleDeleteCart=(courseItem)=>{
        dispatch(deleteCart(courseItem));
    }
    return (
        <div className='mt-24'>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Mã khóa học

                    </Table.HeadCell>
                    <Table.HeadCell>
                        Tên khóa học
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Ngày tạo
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Add to Pay
                        </span>

                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Delete Cart
                        </span>

                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {courses.map((course) =>
                        <Table.Row key={course.maKhoaHoc} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {course.maKhoaHoc}
                            </Table.Cell>
                            <Table.Cell>
                                {course.tenKhoaHoc}
                            </Table.Cell>
                            <Table.Cell>
                                {course.ngayTao}
                            </Table.Cell>
                            <Table.Cell>
                                $2
                            </Table.Cell>
                            <Table.Cell>
                                <div
                                    onClick={() => handleAddToPay(course)}
                                    className="hover:cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Add To Pay
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div
                                    onClick={()=>handleDeleteCart(course)}
                                    className="hover:cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Delete Cart
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>
            </Table>
            <div className='mt-10 mb-10 mx-20 text-2xl text-red-700 font-bold'>
                <p className="text-2xl font-bold text-[#082346] inline-block mr-2">Số lượng khóa học đã chọn
                    : </p>
                {pay.course.length}
            </div>
            <div className='mt-10 mb-10 mx-20 text-2xl text-red-700 font-bold'>
                <p className="text-2xl font-bold text-[#082346] inline-block mr-2">Tổng số tiền
                    : </p>
                ${pay.course.length * 2}
            </div>
            <div className='mt-10 mb-10 mx-20 text-2xl text-red-700 font-bold'>
                
            </div>
            <div className='mt-10 mb-10 mx-20 text-2xl text-red-700 font-bold'>
                <Button onClick={()=>haddlePay()}>
                    Thanh toán
                </Button>
            </div>
        </div>
    )
}

export default Cart