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
  <div className="OnePullReq-cont">
    <div className="OnePullReq-cont__left-part">
        <p className="OnePullReq-cont_left-part_title">Merge brach {second_branch} into {main_branch} <MergeIcon /></p>
        <p className="OnePullReq-cont_left-part_date">Created At : {date_created} </p>
    </div>
    <div className="OnePullReq-cont__right-part">
      <div className="OnePullReq-cont_right-part_icons">
         <img className="OnePullReq-cont_right-particons_avatar" src={avatar_url} />
         <div className="OnePullReq-cont_right-particons_isverified">
            <p className={`OnePullReq-cont__right-part__icons__isverified__state${state==="open"?"__open":"__closed"}`}>{state}</p>
            <img className="OnePullReq-cont_right-particonsisverified_icon"  src={state==="open"? verified:rejected}  />
         </div>
      </div>
     <div className="OnePullReq-cont_right-part_date">
         <p className="OnePullReq-cont_right-partdate_content"> Updated At: {date_updated}</p>
      </div>
    </div>
  </div>
)
}