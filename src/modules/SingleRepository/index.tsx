import { useQuery } from "react-query";
import { PATH } from "../auth/routes/paths";
import MainContainer from "../shared/layout/MainContainer/MainContainer";
import MainLayout from "../shared/layout/MainLayout/MainLayout";
import { fetchPullRequests } from "../shared/store/queries/Pullrequest";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../shared/store";
import { data } from "jquery";
import { Collapse } from 'antd'
import Commits from "../Commits";
import OnePullRequest from "../OnePullRequest";
import './index.scss'

interface IPullRequest {
    number: number;
    base:{
        label: string;
        ref: string;
    }
  }
export default function SingleRepository(){
    const{id}=useParams()
    const{user}=useAppSelector((state)=>state.auth)
    console.log(user)
    const { data:pullRequests, isLoading } = useQuery({
        queryFn: () => fetchPullRequests ({user:user?.user_metadata?.user_name!,repo:id!}),
        queryKey: ['pull-request', {}],
        cacheTime: 1,
       
      });
      console.log(pullRequests)
    return(
        <>
        <MainLayout>
           <MainContainer linkProps={{title:id!,links:[{href:PATH.PULL,name:"Pull Requests"}]}}>
           <Collapse
                items={pullRequests?.map((pull: IPullRequest) => ({
                  key: `${pull.number}`,
                  label: <OnePullRequest pull={pull}/>, // pull request header 
                  children: (
                    <Commits pull={pull}/> // pull request commits list  
                  ),
                }))}
 />
           </MainContainer>
        </MainLayout>
        </>
    )
}
