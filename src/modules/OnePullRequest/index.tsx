import MergeIcon from "../shared/assets/icons/merge"
import { useAppSelector } from "../shared/store"
import './index.scss'
import verified from '../shared/assets/images/verifie.png'
import rejected from '../shared/assets/images/rejected.png'
interface OnePullRequestProps{
  main_branch:string,
  second_branch:string,
  date_created:string,
  state:string,
  date_updated:string
}
export default function OnePullRequest({main_branch,second_branch,date_created,state,date_updated}:OnePullRequestProps){   
 const {user}=useAppSelector((state)=>state.auth)
 const {avatar_url}=user?.user_metadata || {}
  return(
  <div className="OnePullRequest-container">
    <div className="OnePullRequest-container__left-part">
        <p className="OnePullRequest-container__left-part__title">Merge brach {second_branch} into {main_branch} <MergeIcon /></p>
        <p className="OnePullRequest-container__left-part__date">Created At : {date_created} </p>
    </div>
    <div className="OnePullRequest-container__right-part">
      <div className="OnePullRequest-container__right-part__icons">
         <img className="OnePullRequest-container__right-part__icons__avatar" src={avatar_url} />
         <div className="OnePullRequest-container__right-part__icons__isverified">
            <p className={`OnePullRequest-container__right-part__icons__isverified__state${state==="open"?"__open":"__closed"}`}>{state}</p>
            <img className="OnePullRequest-container__right-part__icons__isverified__icon" src={state==="open"? verified:rejected}  />
         </div>
      </div>
      <div className="OnePullRequest-container__right-part__date">
         <p className="OnePullRequest-container__right-part__date__content"> Updated At: {date_updated}</p>
      </div>
    </div>

  </div> 
 
)
}