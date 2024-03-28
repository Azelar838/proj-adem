import axiosInstance from "@src/modules/auth/utils/axios";
import { endpoints } from "../../routes/endpoints.routes";
import { message } from "antd";

export const fetchCommits = async (props:{user:string,repo:string,ref:string}) => {
    const{user,repo,ref}= props
    try{
     const response = await axiosInstance.get(`${endpoints.getPullRequestsCommits}`.replace(':user',user).replace(':repo',repo).replace(':ref',ref));
     return response.data;
   }catch(error:any){
     message.error(error.message)
   }
    }
   