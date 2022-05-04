import React, { useContext, useEffect, useState } from 'react'
import Main from '../components/Main'

import { MovieContext } from '../context/MovieContext'

const Home = () => {
  const { fetchTrendingMovies } = useContext(MovieContext)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchTrendingMovies(page)
  }, [fetchTrendingMovies, page])

  return <Main />
}

export default Home
