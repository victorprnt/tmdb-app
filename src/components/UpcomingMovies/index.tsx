import { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import MovieCard from '../MovieCard'
import * as S from './styles'

const UpcomingMovies = () => {
  const { upcomingMovies } = useContext(MovieContext)

  return (
    <S.Wrapper>
      <h1>Upcoming Movies</h1>
      {upcomingMovies.map((upcomingMovie) => {
        return (
          <MovieCard
            id={upcomingMovie.id}
            key={upcomingMovie.id}
            title={upcomingMovie.title}
            runtime={upcomingMovie.runtime}
            size="large"
            release_date={
              upcomingMovie.release_date
                ? upcomingMovie.release_date.slice(0, 4)
                : 'TBA'
            }
            backdrop_path={upcomingMovie.backdrop_path}
            poster_path={
              upcomingMovie.poster_path
                ? `https://image.tmdb.org/t/p/w780${upcomingMovie.backdrop_path}`
                : 'https://simpleicon.com/wp-content/uploads/film.png'
            }
          />
        )
      })}
    </S.Wrapper>
  )
}

export default UpcomingMovies
