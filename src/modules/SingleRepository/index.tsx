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
import LoadingScreen from "../shared/components/Loading";
import NoData from "../shared/components/NoData";
import { fDate, fDateTime } from "../shared/utils/formatTime";
interface IPullRequest{
  number: number,
}

export default function SingleRepository(){
    const{id}=useParams()
    const{user}=useAppSelector((state)=>state.auth)
    console.log(user)
    const { data:pullRequests, isLoading } = useQuery({
        queryFn: () => fetchPullRequests ({user:user?.user_metadata?.user_name!,repo:id!}),
        queryKey: ['pull-request', {}],
        staleTime: Infinity,
        cacheTime: 1,
       
      });
      console.log(pullRequests)
    return(
        <>
        <MainLayout>
           <MainContainer linkProps={{title:`${id}`,links: [{href: PATH. REPOS, name: "repositories"},{href:PATH.PULL.replace(':id',`${id}`),name:"pull requestes"}]}}>
            { isLoading?(<LoadingScreen blur size="full"/>):(
              !pullRequests || pullRequests?.length===0 ?
              <NoData title={"can't find any pull requests"}/>:
              (
           <Collapse
                items={pullRequests?.map((pull: IPullRequest,index:number) => ({
                  key: `${pull.number}`, 
                  label: <OnePullRequest  
                           main_branch={pullRequests[index]?.base?.ref}
                           second_branch={pullRequests[index]?.head?.ref}
                           date_created={fDate(pullRequests[index]?.created_at)}
                           state={pullRequests[index]?.state}
                           date_updated={fDateTime(pullRequests[index]?.updated_at)}
                    />, 
                  children: (
                    <Commits ref={pull.number}/> // pull request commits list  
                    
                    ),
                    
                }))}/>)
                )
              }            
           </MainContainer>
           
        </MainLayout>
        
        </>
        
    )
}
