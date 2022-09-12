import axiosClient from "./axiosClient";

const authAPI = {
    loginAction: (data) => {
        return axiosClient.post('QuanLyNguoiDung/DangNhap', data)
    },
    registerAcion: (data) => {
        return axiosClient.post("QuanLyNguoiDung/DangKy", data)
    },
    getAccountDetail: (data)=>{
        return axiosClient.post("QuanLyNguoiDung/ThongTinNguoiDung", data)
    }
}

export default authAPI;