import { id, is } from "date-fns/locale";
import { endpoints } from "../shared/store/routes/endpoints.routes";
import { useQuery } from "react-query";
import CardSkew from "../shared/components/Cards/Cards-SKEW/Card-skew";
import NoData from "../shared/components/NoData";
import { fetchUserRepositories } from "../shared/store/queries/repositories";
import './index.scss'
import Header from "../shared/components/Header";
import LoadingScreen from "../shared/components/Loading";
import MainContainer from "../shared/layout/MainContainer/MainContainer";
import MainLayout from "../shared/layout/MainLayout/MainLayout";
import { PATH } from "../auth/routes/paths";
import { useNavigate } from "react-router-dom";




export default function Repositores(){
    const { data, isLoading } = useQuery({
        queryFn: () => fetchUserRepositories (),
        queryKey: ['Repos', {}],
        cacheTime: 1,
       
      });
      const navigate = useNavigate()
      const handleClick=(id:any)=>{
        navigate(PATH.PULL.replace(':id',id))
      }
      return(
      
        
        <MainLayout>
          
       <MainContainer linkProps={{title:"repositories",links:[{href:PATH.REPOS,name:"repositories"}]}}>
        {
        isLoading?( <LoadingScreen blur size="full"/>) : 
         
         <div className="card" >
       
        {!data || data?.length===0?(<NoData title="No Projects" />): data?.map((repo:any,index:any) =>(

          <div onClick={()=>handleClick(repo.id)}>
          <CardSkew autoColors={index + 1} >
           <div className="cardContent" >
             <h6>{repo.name}</h6>
             <p className="state">{repo.visibility}</p>
           </div>
         </CardSkew>
         
         </div>
         
         
          
        ))}  
       </div>
       }
       </MainContainer>
       </MainLayout>
  
      );
}