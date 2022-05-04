import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
}

const Logo = ({ size = 'normal' }: LogoProps) => (
  <S.Wrapper size={size}>
    <img src="/img/tmdb-logo-large.svg" alt="The Movie Database logo image" />
  </S.Wrapper>
)

export default Logo
