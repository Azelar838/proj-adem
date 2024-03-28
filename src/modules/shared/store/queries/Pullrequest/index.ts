import axiosInstance from "@src/modules/auth/utils/axios";
import { endpoints } from "../../routes/endpoints.routes";
import { message } from "antd";

export const fetchPullRequests = async (props:{user:string,repo:string,}) => {
    const{user,repo}= props
    try{
     const response = await axiosInstance.get(`${endpoints.getPullRequests}`.replace(':user',user).replace(':repo',repo));
     return response.data;
   }catch(error:any){
     message.error(error.message)
   }
    }
   