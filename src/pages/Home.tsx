import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { getTrendingMovies } from '../services/movie-services'

const Home = () => {
  useEffect(() => {
    console.log(getTrendingMovies(1))
  }, [])
  return <MovieCard />
}

export default Home
