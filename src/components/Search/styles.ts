import styled from 'styled-components'

import theme from '../../styles/light'

export const Wrapper = styled.div`
  form {
    display: flex;
    align-items: center;

    input {
      /* max-width: 25rem; */
      width: 26rem;
      height: 1.5rem;
      padding: 1rem;
      background-color: #e7e9ee;
      border: none;
      border-radius: 1rem;
      font-size: 1rem;
      color: #000;

      transition: all 0.3s ease-in-out;

      &:focus {
        /* width: 25rem; */
      }

      &::placeholder {
        color: #7a7a7a;
      }
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    form {
      margin-top: 2rem;
      justify-content: center;
    }
    input {
      width: 50rem !important;
      height: 3rem !important;
    }
  }
`
export const SearchList = styled.div`
  max-height: 390px;
  max-width: 300px;
  position: absolute;
  z-index: 1;
  border-radius: 0.25rem;
  overflow-y: scroll;
  overflow-x: hidden;
  img {
    width: 2.75rem;
  }
  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px;
    background-color: #fff;
    text-decoration: none;
    span {
      margin: 8px;
      color: ${theme.colors.lightText};
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    width: 0.5rem;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.scrollBar};
    border-radius: 5px;
    &:hover {
      background-color: ${theme.colors.scrollHover};
    }
  }
`
