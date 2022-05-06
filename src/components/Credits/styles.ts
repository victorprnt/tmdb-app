import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  .cast {
    h2 {
      margin-bottom: 1rem;
    }
    .cast-card {
      display: flex;
      justify-content: space-between;
      max-width: 100%;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 7rem;

        img {
          margin-bottom: 0.5rem;
          border-radius: 50%;
        }

        p {
          text-align: center;
        }

        & + div {
          margin-left: 1.5rem;
        }
      }
    }
  }
`
