import React, { useContext, useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'

const Movie = () => {
  const { getMovieDetails, movieDetail } = useContext(MovieContext)
  const match = useMatch('/movie/:movieId')
  const movieId: string = match?.params.movieId ?? 'No match'

  useEffect(() => {
    getMovieDetails(movieId ?? 'No match')
  }, [movieId])

  return (
    <>
      <div className="movie-general">
        <h1>{movieDetail.title}</h1>
        <p className="original-title">{movieDetail.original_title}</p>
        <div className="bullet-info">
          <span className="release-year">
            {movieDetail.release_date.slice(0, 4)}
          </span>
          <span className="genre">
            {movieDetail.genres.map((genre) => {
              return genre === movieDetail.genres[movieDetail.genres.length - 1]
                ? genre.name
                : `${genre.name} & `
            })}
          </span>
          <span className="pg">PG13</span>
          <span className="runtime">{`${movieDetail.runtime} minutes`}</span>
        </div>
        <p className="sinopse">{movieDetail.overview}</p>
        {/* <Social movieId={id} /> */}
        {/* <Credits movieId={id} /> */}
      </div>
      <div className="poster">
        {/* {smallScreen ? ( */}
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
        />
        {/* ) : ( */}
        <img
          src={`https://image.tmdb.org/t/p/w780${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        {/* )} */}
      </div>
      {/* <SimilarMovies movieId={movieDetail.id} /> */}
    </>
  )
}

export default Movie
