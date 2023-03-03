import { AxiosInstance } from "../../util/AxiosInstance/AxiosInstance"

export const getCart=async ()=>{
    const URL=`/carts/`
    try {
        const resoponse=await AxiosInstance.get(URL)
        console.log(resoponse)
        return resoponse;
    } catch (error) {
        console.log(error);
        throw error;
    }
}