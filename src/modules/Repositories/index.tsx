import { is } from "date-fns/locale";
import { endpoints } from "../shared/store/routes/endpoints.routes";
import { useQuery } from "react-query";
import CardSkew from "../shared/components/Cards/Cards-SKEW/Card-skew";
import NoData from "../shared/components/NoData";

export default function Repositores(){
    const fetchUserRepositories = async (Repos:string) => {
        const response = await fetch(`https://api.github.com/${Repos}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user repositories');
        }
        return response.json();
      };

    const { data, isLoading } = useQuery({
        queryFn: () => fetchUserRepositories (endpoints.getRepositories),
        queryKey: ['Repos', {}],
        cacheTime: 1,
        enabled: !!endpoints.getRepositories,
      });
      if(isLoading){
        return <div>Loading...</div>
      }
      return(
       <div>
        {data?.map((repo:any,index:any) =>{
          if(data.length() != 0){
            return(
         <CardSkew autoColors={index + 1}>
           <div>
             <h6>{repo.name}</h6>
             <p>{repo.description}</p>
           </div>
         </CardSkew>
         
         )}else{
          return(
            <div>
              <NoData title="No Projects" />
            </div>
          )
         }
    
       })}
       </div>
      );
}