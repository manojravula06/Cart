import axios from "axios";
import {BASE_URL,TIME_OUT } from "../../Config/Config";

axios.defaults.headers.common['content-Type']='application.json';
axios.defaults.headers.common['Accept']='application.json';

export const AxiosInstance=axios.create({
    baseURL:BASE_URL,
    timeout:TIME_OUT
})