import Menu from '../Menu'
import MovieGrid from '../MovieGrid'
import UpcomingMovies from '../UpcomingMovies'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Menu />
    <S.MovieGridsWrapper>
      <UpcomingMovies />
      <MovieGrid />
    </S.MovieGridsWrapper>
  </S.Wrapper>
)

export default Main
