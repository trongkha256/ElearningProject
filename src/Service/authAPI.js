import axiosClient from "./axiosClient";

const authAPI = {
    loginAction: (data) => {
        return axiosClient.post('QuanLyNguoiDung/DangNhap', data)
    },
    registerAcion: (data) => {
        return axiosClient.post("QuanLyNguoiDung/DangKy", data)
    },
}

export default authAPI;