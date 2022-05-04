import Logo from '../Logo'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <div className="logo-menu">
      <Logo />
      <a href="/" className="menu-item" aria-label="Movies Link">
        Movies
      </a>
      <a href="/tv-shows" className="menu-item" aria-label="TV Shows Link">
        TV Shows
      </a>
    </div>

    <form action="">
      <input type="search" placeholder="Search" className="search" />
    </form>
  </S.Wrapper>
)

export default Menu
