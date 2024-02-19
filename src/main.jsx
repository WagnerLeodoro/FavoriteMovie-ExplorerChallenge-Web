import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'

import theme from './assets/styles/theme.js'
import { Details } from './pages/Details/index.jsx'
// import { SignUp } from './pages/SignUp/index.jsx'
// import { Home } from './pages/Home/index.jsx'
// import { Profile } from './pages/Profile/index.jsx'
// import { NewMovie } from './pages/Home/NewMovie/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
