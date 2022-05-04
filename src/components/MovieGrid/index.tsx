import { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import MovieCard from '../MovieCard'
import * as S from './styles'

const MovieGrid = () => {
  const { movies } = useContext(MovieContext)

  return (
    <S.Wrapper>
      {!!movies[0] && (
        <MovieCard
          id={movies[0].id}
          title={movies[0].title}
          runtime={movies[0].runtime}
          poster_path={movies[0].poster_path}
          backdrop_path={movies[0].backdrop_path}
          release_date={movies[0].release_date}
          size="highlight"
        />
      )}
      <S.MovieGridWrapper>
        {movies.slice(1).map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              runtime={movie.runtime}
              size="normal"
              release_date={
                movie.release_date ? movie.release_date.slice(0, 4) : 'TBA'
              }
              backdrop_path={movie.backdrop_path}
              poster_path={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                  : 'https://simpleicon.com/wp-content/uploads/film.png'
              }
            />
          )
        })}
      </S.MovieGridWrapper>
    </S.Wrapper>
  )
}

export default MovieGrid
