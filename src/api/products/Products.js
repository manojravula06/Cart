import { AxiosInstance } from "../../util/AxiosInstance/AxiosInstance";

export const getAllProducts=async()=>{
    const URL='/products'
    try {
        const response=await AxiosInstance.get(URL)
        return response;
    } catch (error) {
        throw error
    }
}
