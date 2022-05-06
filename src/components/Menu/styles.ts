import styled from 'styled-components'

import theme from '../../styles/light'

export const Wrapper = styled.menu`
  display: flex;
  justify-content: space-between;

  width: 85%;
  height: auto;
  margin: 0 auto;

  margin-top: 2rem;

  .logo-menu {
    display: flex;
    align-items: center;

    .menu-item {
      position: relative;
      color: #fff;
      text-decoration: none;
      font-size: 2rem;
      font-weight: normal;

      transition: all 0.3s ease-in-out;

      margin: 0 3rem 0 5rem;

      /* &:not(:last-child) {
        margin: 0 3rem 0 5rem;
      } */

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        margin: 0 10%;
        /* transform: translateX(-50%); */

        width: 0;
        height: 2px;
        background-color: ${theme.colors.titleHover};

        transition: all 0.3s ease-in-out;
      }

      &:hover {
        color: ${theme.colors.titleHover};
        &::after {
          width: 80%;
        }
      }
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    flex-direction: column;
    .logo-menu {
      flex-direction: column;
      .menu-item {
        margin: 0;
        margin-top: 1rem;
        font-size: 3rem;
      }
    }
  }
`
