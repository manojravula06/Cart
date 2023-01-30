import { AxiosInstance } from "../../util/AxiosInstance/AxiosInstance";

export const getAllProducts=async()=>{
    const URL='/products'
    try {
        const response=await AxiosInstance.get(URL)
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error
    }
}
