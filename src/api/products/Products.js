import { AxiosInstance } from "../../util/AxiosInstance/AxiosInstance";

export const getAllProducts=async()=>{
    const URL='/products'
    try {
        const response=await AxiosInstance.get(URL);
        return response.data;
    } catch (error) {
        throw error
    }
}

export const getjewelery=async()=>{
    const URL=`products/category/jewelery`
    try {
        const response=await AxiosInstance.get(URL)
        return response.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getElectronics=async()=>{
    const URL='products/category/electronics'
    try {
        const response=await AxiosInstance.get(URL)
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getMensCloting=async()=>{
    const URL=`products/category/men's clothing`
    try {
        const response=await AxiosInstance.get(URL)
        return response;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const getWomensCloting=async()=>{
    const URL=`products/category/women's clothing`
    try {
        const response=await AxiosInstance.get(URL)
        return response.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}


export const getSingleProduct=async(id)=>{
    const URL=`https://fakestoreapi.com/products/${id}`
    try {
        const response=await AxiosInstance.get(URL)
        return response;
    } catch (error) {
        throw error
    }
}

