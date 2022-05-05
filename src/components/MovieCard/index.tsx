import { MovieCardProps } from '../../context/MovieContext'
import * as S from './styles'

export type LogoWrapperProps = {
  size?: 'normal' | 'large' | 'highlight'
}

const MovieCard = ({
  id,
  title,
  runtime,
  poster_path,
  backdrop_path,
  release_date,
  size = 'normal'
}: MovieCardProps) => (
  <S.Wrapper size={size}>
    <a key={Math.random()} href={`/movie/${id}`}>
      {(size === 'highlight' || 'large') && (
        <img
          src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`}
          alt={`{title} movie poster`}
        />
      )}
      {size === 'normal' && (
        <img src={poster_path} alt={`{title} movie poster`} />
      )}
      <div>
        {size === 'large' && <p className="new-tag">NEW</p>}
        <div className="movie-infos">
          <div className="title-year">
            <p className="title">{title}</p>
            {size !== 'highlight' && <p className="release">{release_date}</p>}
          </div>
          {size === 'large' && <p className="duration">{runtime}</p>}
        </div>
      </div>
    </a>
  </S.Wrapper>
)

export default MovieCard
