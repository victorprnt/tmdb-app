import React from 'react'
import { MovieProvider } from './context/MovieContext'
import Home from './pages/Home'
import GlobalStyles from './styles/global'

function App() {
  return (
    <MovieProvider>
      <GlobalStyles />
      <Home />
    </MovieProvider>
  )
}

export default App
