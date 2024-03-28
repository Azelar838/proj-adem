import { useParams } from "react-router-dom";
import { useAppSelector } from "../shared/store";
import { useQuery } from "react-query";
import { fetchCommits } from "../shared/store/queries/Commits";
import { current } from "@reduxjs/toolkit";

export default function Commits(pull:any){
  const currentPullrequestRef=pull?.number
    const{id}=useParams()
    const{user}=useAppSelector((state)=>state.auth)
    console.log(user)
    const { data:Commits, isLoading } = useQuery({
        queryFn: () => fetchCommits ({user:user?.user_metadata?.user_name!,repo:id!,ref:currentPullrequestRef}),
        queryKey: ['commits', {}],
        cacheTime: 1,
       
      });
      console.log(Commits)
      return(
        <>
        <p></p>
        </>
      )
}