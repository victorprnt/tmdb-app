import React, { useContext, useEffect } from 'react'
import { useMatch } from 'react-router-dom'
import Menu from '../components/Menu'
import MovieDetails from '../components/MovieDetails'
import { MovieContext } from '../context/MovieContext'

const Movie = () => {
  const { getMovieDetails, getCredits } = useContext(MovieContext)

  const match = useMatch('/movie/:movieId')
  const movieId: string = match?.params.movieId ?? 'No match'

  useEffect(() => {
    getMovieDetails(movieId)
    getCredits(movieId)
  }, [movieId])

  return (
    <>
      <Menu />
      <MovieDetails />
    </>
  )
}

export default Movie
