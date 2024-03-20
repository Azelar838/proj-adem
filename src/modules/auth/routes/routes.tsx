/* eslint-disable @typescript-eslint/no-explicit-any */
//import GuestLayout from '@src/modules/shared/layout/GuestLayout/GuestLayout'
import { Fragment, lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import GuestGuard from '../../shared/guards/GuestGuard'
import { PATH } from './paths'
import UniverseWrapper from '@src/modules/shared/layout/UniverseWrapper'
import AuthGuard from '@src/modules/shared/guards/AuthGuard'


type RouteConfig = {
  exact: boolean | null
  path: string
  component: React.ComponentType<any>
  guard?: React.ComponentType<any> | typeof Fragment | any
  layout?: React.ComponentType<any> | typeof Fragment
} & RouteProps

const routes: RouteConfig[] = [
  {
    exact: true,
    guard: GuestGuard,
    path: PATH.LOGIN,
    component: lazy(() => import('../features/Login/Login')),
    layout:(props:any)=><UniverseWrapper {...props} />, 
  },

  {
    exact: true,
    guard: AuthGuard,
    path: PATH.HOME,
    component: lazy(() => import('../../shared/components/Pages/HomePage/home')),
    layout:(props:any)=><UniverseWrapper {...props} />, 
  },
]

export default routes
