
import {commonApi} from "./commonApi"
const baseUrl = import.meta.env.VITE_BASE_URL;

export const register=async(body)=>{
    return await commonApi("post",`${baseUrl}register`,body)

}