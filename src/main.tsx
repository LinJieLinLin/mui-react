import { createRoot } from 'react-dom/client'
import { Suspense, StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
// import { HashRouter, useRoutes } from 'react-router-dom'
import router from './router/index'
// import { routes } from './router/index'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

// const AppRoutes = () => {
//   return useRoutes(routes)
// }
const app = createRoot(document.getElementById('root')!)
app.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div></div>}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        {/* <HashRouter>
          <AppRoutes />
        </HashRouter> */}
      </Suspense>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
)
