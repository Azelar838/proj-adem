import { PATH } from '@src/modules/auth/routes/paths'
import routes, { renderRoutes } from '@src/modules/shared/routes'
import { useAppSelector } from '@src/modules/shared/store'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Navigate, useNavigate } from 'react-router-dom'

const App = () => {
  const queryClient = new QueryClient()
  const { i18n } = useTranslation('translation')
  document.body.dir = i18n?.dir()

  const theme = useAppSelector((state) => state.theme.mode)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const Navigate = useNavigate()
  useEffect(()=>{
    if (isAuthenticated) {
      Navigate(PATH.HOME)
    } else {
      Navigate(PATH.LOGIN)
    }
  }, [isAuthenticated,Navigate])

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
