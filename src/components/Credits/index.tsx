import { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MovieContext'
import * as S from './styles'

const Credits = () => {
  const { getCredits, casting, movieDetail } = useContext(MovieContext)

  useEffect(() => {
    getCredits(movieDetail.id.toString())
  }, [])

  return (
    <S.Wrapper>
      <div className="cast">
        <h2>Elenco</h2>
        <div className="cast-card">
          {casting &&
            casting.slice(0, 5).map((cast) => {
              return (
                <div key={cast.id}>
                  <img
                    style={{
                      width: '5rem',
                      height: '5rem',
                      objectFit: 'cover'
                    }}
                    src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                    alt={cast.name}
                  />
                  <p>{cast.name}</p>
                </div>
              )
            })}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Credits
