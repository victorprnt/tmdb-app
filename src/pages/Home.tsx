import React, { useContext, useEffect, useState } from 'react'
import Main from '../components/Main'

import { MovieContext } from '../context/MovieContext'

const Home = () => {
  const { getTrendingMovies, getUpcomingMovies } = useContext(MovieContext)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getTrendingMovies(page)
    getUpcomingMovies()
  }, [page])

  return <Main />
}

export default Home
