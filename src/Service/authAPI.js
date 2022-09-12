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
    },
    getUserShowing: () => {
        return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");

    },
    deleteUser: (taiKhoan) => {
        return axiosClient.delete("QuanLyNguoiDung/XoaNguoiDung", {
            params: { taiKhoan }
        })
    },
    createUser: (userData) => {
        return axiosClient.post("QuanLyNguoiDung/ThemNguoiDung", userData)
    },
    updateUser: (userData) => {
        return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", userData)
    },
}

export default authAPI;