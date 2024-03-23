import { is } from "date-fns/locale";
import { endpoints } from "../shared/store/routes/endpoints.routes";
import { useQuery } from "react-query";
import CardSkew from "../shared/components/Cards/Cards-SKEW/Card-skew";
import NoData from "../shared/components/NoData";
import { fetchUserRepositories } from "../shared/store/queries/repositories";
import './index.scss'
import Header from "../shared/components/Header";


export default function Repositores(){
    const { data, isLoading } = useQuery({
        queryFn: () => fetchUserRepositories (),
        queryKey: ['Repos', {}],
        cacheTime: 1,
       
      });
      if(isLoading){
        return <div className="loading">Loading...</div>
      }
      return(
    
       
       <div className="card">
         <Header/>
        {!data || data?.length===0?(<NoData title="No Projects" />): data?.map((repo:any,index:any) =>(

          
         <CardSkew autoColors={index + 1}>
           <div className="cardContent">
             <h6>{repo.name}</h6>
             <p className="state">{repo.private ? 'Private' : 'Public'}</p>
           </div>
         </CardSkew>
       
         
         
         
          
        ))}
       
        
       </div>
      
      );
}