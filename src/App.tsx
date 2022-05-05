import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { MovieProvider } from './context/MovieContext'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </MovieProvider>
  )
}

export default App
