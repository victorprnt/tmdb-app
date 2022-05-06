import styled from 'styled-components'

import theme from '../../styles/light'

export const Wrapper = styled.section`
  h1 {
    margin: 0 auto 4rem 3rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 25%;
  height: 100%;

  overflow-y: auto;

  & > div {
    margin-bottom: 4rem;
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
    background-color: #7a7a7a;
    border-radius: 5px;
    &:hover {
      background-color: #8a8a8a;
    }
  }

  @media (max-width: ${theme.screenSize.laptop}) {
    display: none;
  }
`
