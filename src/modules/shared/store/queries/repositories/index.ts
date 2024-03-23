import axiosInstance from "@src/modules/auth/utils/axios";
import { endpoints } from "../../routes/endpoints.routes";
import { message } from "antd";

export const fetchUserRepositories = async () => {
   try{
    const response = await axiosInstance.get(`${endpoints.getRepositories}`);
    return response.data;
  }catch(error:any){
    message.error(error.message)
  }
   }
  