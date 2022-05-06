import styled from 'styled-components'

import theme from '../../styles/light'

export const Wrapper = styled.main`
  max-width: 100%;
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'text poster';
  position: relative;
  margin-top: 3rem;
  padding-top: 10rem;

  .movie-general {
    margin: 0 auto;
    max-width: 80%;
    padding: 1.5rem 0;
    grid-area: text;
    margin: auto;

    h1 {
      font-size: ${theme.fontSize.title};
      line-height: 3rem;
      margin-bottom: 0.25rem;
    }

    .original-title {
      font-size: ${theme.fontSize.smallText};
      line-height: 1rem;
      color: ${theme.colors.lightText};
      margin-bottom: 1.5rem;
    }

    .bullet-info {
      display: flex;
      align-items: center;
      & > span {
        color: ${theme.colors.lightText};
        & + span {
          margin-left: 2.5rem;
        }
      }

      .pg {
        padding: 0.25rem;
        border: 1px solid ${theme.colors.lightText};
        border-radius: 0.25rem;
      }
    }

    .sinopse {
      margin-top: 1.5rem;
      font-size: ${theme.fontSize.defaultText};
      line-height: 120%;
      letter-spacing: 0.1rem;
      font-weight: 200;
    }

    .trailer {
      margin-top: 2rem;
      margin-bottom: 2rem;
      a {
        img {
          width: 3rem;
        }
        & + a {
          margin-left: 3rem;
        }
      }
    }
  }

  .poster {
    grid-area: poster;
    margin: 0 auto;
    img {
      width: 50rem;
      border-radius: 0.25rem;
    }
    @media (max-width: ${theme.screenSize.laptop}) {
      display: none;
    }
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    /* transform: translateX(-50%) */
    width: 100%;
    height: 70vh;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
      );
    }
  }
  @media (max-width: ${theme.screenSize.laptop}) {
  }
  @media (max-width: ${theme.screenSize.tablet}) {
  }
  @media (max-width: ${theme.screenSize.laptop}) {
    display: flex;
    position: relative;
    padding-top: 2rem;
    /* grid-template-rows: 1fr 3fr;
    grid-template-columns: none;
    grid-template-areas:
      'poster'
      'text'; */
    .movie-general {
      margin-top: 8rem;
      padding: 0 1rem;
      h1 {
        font-size: ${theme.fontSize.title};
        line-height: 120%;
      }
    }
    .bullet-info {
      & > span {
        color: ${theme.colors.lightText};
        & + span {
          margin-left: 0;
          /* margin-bottom: 0.5rem; */
        }
        .runtime {
          text-align: right;
        }
      }
      .pg {
        padding: 0.25rem;
        border: 1px solid ${theme.colors.lightText};
        border-radius: 0.25rem;
      }
    }
    .poster {
      width: 100%;
      img {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
        z-index: -1;
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        );
      }
    }
  }
`
