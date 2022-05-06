import Logo from '../Logo'
import Search from '../Search'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <div className="logo-menu">
      <Logo />
      <a href="/" className="menu-item" aria-label="Movies Link">
        Movies
      </a>
      {/* <a href="/tv-shows" className="menu-item" aria-label="TV Shows Link">
        TV Shows
      </a> */}
    </div>

    <Search />
  </S.Wrapper>
)

export default Menu
