import { PATH } from '@src/modules/auth/routes/paths'
import routes, { renderRoutes } from '@src/modules/shared/routes'
import { useAppSelector } from '@src/modules/shared/store'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import {  useLocation, useNavigate } from 'react-router-dom'

const App = () => {
  const queryClient = new QueryClient()
  const { i18n } = useTranslation('translation')
  document.body.dir = i18n?.dir()

  const theme = useAppSelector((state) => state.theme.mode)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname
  useEffect(() => {
    if (pathName === '/' || !pathName) {
      if (!isAuthenticated) {
        navigate(PATH.LOGIN)
      } else {
        navigate(PATH.HOME)
      }
    }
  }, [isAuthenticated, pathName])
  return (
    <div id={theme}>
      <Helmet>
        <title>Welcome - Github code reviewer</title>
      </Helmet>
      <QueryClientProvider client={queryClient}>{renderRoutes(routes)}</QueryClientProvider>
    </div>
  )
}

export default App
