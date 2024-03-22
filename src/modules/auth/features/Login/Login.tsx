import GithubIcon from "@src/modules/shared/assets/icons/github"
import CardBalance from "@src/modules/shared/components/Cards/Card-BALANCE/Card-balance"
import { useAppDispatch } from "@src/modules/shared/store"
import {signin} from "../../data/authThunk"
const Login = () => {
const dispatch=useAppDispatch()
  async function signInWithGithub() {
    dispatch(signin());

  }

  return (
    <div className="container">
    <CardBalance>
    <div className="login-module">
      <div className="login-module__card">
        <p className="login-module_card_title">Welcome</p>
        <p className="description">
          Login via your Github account to get started with our app
        </p>
        <button className="loginbtn" onClick={signInWithGithub}><GithubIcon/>Sign in with Github</button>
      </div>
    </div>
    </CardBalance>
      </div>
  )
}

export default Login
