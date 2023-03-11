import axios from "axios";
import Api1Config from "@/config/Api1Config";

const axiosInstance = axios.create(Api1Config);

const postServices = {
    getListUser: (params) => {
        return axiosInstance.get('/users',params);
    },
    createAccount: (params) => {
        return axiosInstance.post(`/users`, params);
    },
    // getListPost: () => {
    //     return axiosInstance.get('/posts');
    // },
    // deletePost: (id) => {
    //     return axiosInstance.delete(`/posts/${id}`);
    // },
    // addPost: (params = {}) => {
    //     return axiosInstance.post(`/posts`, params);
    // },
    // editPost: (params = {}) => {
    //     return axiosInstance.put(`/posts`, params); 
    // },
}

export default postServices;