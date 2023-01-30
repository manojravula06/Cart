import { AxiosInstance } from "../../util/AxiosInstance/AxiosInstance"

export const getAllCategories=async()=>{
    const URL='products/categories'
    try {
        const response=await AxiosInstance.get(URL)
        console.log(response)
        return response.data;        
    } catch (error) {
        return error
    }
}