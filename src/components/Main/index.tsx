import Menu from '../Menu'
import MovieGrid from '../MovieGrid'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Menu />
    <S.MovieGridsWrapper>
      {/* <TrendingMovies /> */}
      <MovieGrid />
    </S.MovieGridsWrapper>
  </S.Wrapper>
)

export default Main
