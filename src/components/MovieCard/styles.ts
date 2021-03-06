import styled, { css } from 'styled-components'
import theme from '../../styles/light'

import { LogoWrapperProps } from '.'
import { MovieCardProps } from '../../context/MovieContext'

const wrapperSizeModifiers = {
  normal: () => css`
    width: 185px;
    height: 278px;
    .movie-infos {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1rem;
      .title {
        margin-bottom: 0.75rem;
        font-size: 1.75rem;
        line-height: 2rem;
        opacity: 0;
      }

      .release {
        font-size: 1.25rem;
        line-height: 1.5rem;
        opacity: 0;
      }
    }

    &:hover {
      img {
        filter: brightness(0.5);
        transform: scale(1.15);
      }
      .title {
        opacity: 1;
      }
      .release {
        opacity: 1;
      }
    }
  `,
  large: () => css`
    width: 400px;
    height: 185px;
    .movie-infos {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1.25rem;
      .title {
        margin-bottom: 1rem;
        font-size: 2rem;
        line-height: 2.5rem;
        opacity: 1;
      }

      .release {
        font-size: 1.5rem;
        line-height: 2rem;
        opacity: 1;
      }

      .duration {
        font-size: 1.25rem;
      }
    }

    .new-tag {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.25rem;
      color: #fff;
    }

    &:hover {
      img {
        filter: brightness(0.5);
        transform: scale(1.15);
      }
      .title {
        opacity: 1;
      }
      .release {
        opacity: 1;
      }
    }
  `,
  highlight: () => css`
    width: 100%;
    height: 40vh;
    margin-bottom: 3rem;
    position: relative;
    .movie-infos {
      max-width: fit-content;
      position: absolute;
      right: 0;
      bottom: 50%;
      transform: translateY(50%);
      padding: 2rem;
      .title {
        text-align: right;
        font-size: 4.5rem;
      }
    }
    .more-info {
      position: absolute;
      left: 6rem;
      bottom: 4rem;
      /* width: 100%; */
      color: #fff;
      font-size: 4rem;
      z-index: 10;

      border: 1px solid #fff;
      padding: 0.5rem 0.75rem;
      border-radius: 0.75rem;

      transition: all 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }

    transition: all 0.3s ease-in-out;
    &:hover .more-info {
      background-color: ${theme.colors.titleHover};
      border: 1px solid ${theme.colors.titleHover};
    }
  `
}

export const Wrapper = styled.div<LogoWrapperProps>`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    ${({ size }) => css`
      ${!!size && wrapperSizeModifiers[size]}
    `}

    border-radius: 0.5rem;

    transition: all 0.3s ease-in-out;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s;

      transition: all 0.3s ease-in-out;
    }

    .movie-infos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      color: #fff;

      .title-year {
        text-align: left;
        .title {
          font-weight: 600;
          .release {
            font-weight: 400;
          }
        }
      }
    }
  }
`
