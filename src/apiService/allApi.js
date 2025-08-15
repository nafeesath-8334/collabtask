
import {commonApi} from "./commonApi"
const baseUrl = import.meta.env.VITE_BASE_URL;

export const register=async(body)=>{
    return await commonApi("POST",`${baseUrl}register`,body)

}
export const login=async(body)=>{
    return await commonApi("POST",`${baseUrl}login`,body)

}

export const getProfile = async (id, headers) => {
  return await commonApi("GET", `${baseUrl}getProfile/${id}`, headers);
};

export const getforgotpswd = async (data) => {

    console.log(data)
    return await commonApi("POST", `${baseUrl}forgotPassword/`, data);
}
export const resetPassword = async (token, data) => {
    return await commonApi("POST",  `${baseUrl}resetPassword/${token}`, data);
}
export const fetchUserDetails = async () => {
  return await commonApi("GET", `${baseUrl}fetchUserDetails`, "");
};
export const createTeam= async (data,headers) => {
    return await commonApi("POST",  `${baseUrl}addTeam/`,data,headers);
}
export const fetchTeam = async () => {
  return await commonApi("GET", `${baseUrl}fetchTeam`, "");
};
export const addProject= async (data,headers) => {
    return await commonApi("POST",  `${baseUrl}addProject/`,data,headers);
}
export const fetchProject = async () => {
  return await commonApi("GET", `${baseUrl}fetchProject`, "");
};