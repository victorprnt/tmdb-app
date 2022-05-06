import { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import Credits from '../Credits'
import * as S from './styles'

const MovieDetails = () => {
  const { movieDetail } = useContext(MovieContext)

  return (
    <S.Wrapper>
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
        {movieDetail && <Credits />}
      </div>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w780${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
      </div>
      <div className="backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w780${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
        />
      </div>
      {/* <SimilarMovies movieId={movieDetail.id} /> */}
    </S.Wrapper>
  )
}

export default MovieDetails
