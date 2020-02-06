import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { HashRouter as Router } from 'react-router-dom'

import 'rpg-awesome/css/rpg-awesome.min.css'

import GlobalStyles from 'globalStyles'
import * as themes from 'themes'

import MainApp from 'components/App/MainApp'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.main}>
      <Router basename='/'>
        <GlobalStyles />
        <MainApp />
      </Router>
    </ThemeProvider>
  );
}

export default React.memo(App)
