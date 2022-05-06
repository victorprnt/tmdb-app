import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
}

const Logo = ({ size = 'normal' }: LogoProps) => (
  <S.Wrapper size={size}>
    <a href="/">
      <img src="/img/tmdb-logo-large.svg" alt="The Movie Database logo image" />
    </a>
  </S.Wrapper>
)

export default Logo
