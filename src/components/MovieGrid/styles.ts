import styled from 'styled-components'

export const Wrapper = styled.section`
  /* display: flex;
  flex-direction: column; */
  align-items: center;

  max-height: 100%;
  width: 70%;

  margin: 0 auto;

  overflow-y: auto;

  & > div {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin: 0 auto;
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
`

export const MovieGridWrapper = styled.div`
  flex-wrap: wrap;

  /* justify-content: space-around !important; */

  overflow-x: hidden;
  overflow-y: hidden;

  & > div {
    margin: 0.6%;
  }
`
