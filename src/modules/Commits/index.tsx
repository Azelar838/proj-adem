import { useParams } from "react-router-dom";
import { useAppSelector } from "../shared/store";
import { useQuery } from "react-query";
import { fetchCommits } from "../shared/store/queries/Commits";
import './index.scss'
interface CommitsProps{
  ref:any,
}

export default function Commits({ref}:CommitsProps){
    const{id}=useParams()
    const{user}=useAppSelector((state)=>state.auth)
    console.log(user)
    const { data:commits} = useQuery({
        queryFn: () => fetchCommits ({user:user?.user_metadata?.user_name!,repo:id!,ref:ref!}),
        queryKey: ['commits', {}],
        staleTime:Infinity,
        cacheTime: 1,
       
      });
      console.log(commits)
      return(
        <div className="one-commit-container">
           <div className="one-commit-container__head">
              <p className="one-commit-container__head__text">Commits List: </p>
           </div>
           {
            commits?.(()=>{
              <div className="one-commit-container__content">
                <div className="one-commit-container__content__left">
                  <img src="" alt="" />
                   <p></p>
                </div>
                <div className="one-commit-container__content__right">
                  <p></p>
                </div>
              </div>
            })
           }
        </div>
      )
}