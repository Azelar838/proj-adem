import { PATH } from "../auth/routes/paths"
import MainContainer from "../shared/layout/MainContainer/MainContainer"
import MainLayout from "../shared/layout/MainLayout/MainLayout"

export default function SingleRepository(){

    return(
        <>
        <MainLayout>
           <MainContainer linkProps={{title:"repository name",links:[{href:PATH.PULL,name:"Pull Requests"}]}}>
              <h1>Repository Content Here</h1>
           </MainContainer>
        </MainLayout>
        </>
    )
}