import axios from 'axios';
console.log("lll");
import {
    requestErrorHandler, requestInterceptor,
    responseInterceptor, responseErrorHandler
} from './AxiosHelperMethod';

const baseUrl = "https://crudcrud.com/api/7a73f1d79b614a4889067e20ed81a2cc";

const axiosAPI = axios.create({
    baseUrl: baseUrl
});
console.log("d1",baseUrl);
axiosAPI.interceptors.request.use(requestInterceptor, requestErrorHandler)
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler)
console.log("d2",baseUrl);
export default axiosAPI;