import styled from 'styled-components'

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
      font-size: 2em;
      font-weight: normal;

      transition: all 0.3s ease-in-out;

      &:not(:last-child) {
        margin: 0 3rem 0 5rem;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        margin: 0 10%;
        /* transform: translateX(-50%); */

        width: 0;
        height: 2px;
        background-color: #00b4d8;

        transition: all 0.3s ease-in-out;
      }

      &:hover {
        color: #00b4d8;
        &::after {
          width: 80%;
        }
      }
    }
  }

  form {
    display: flex;
    align-items: center;

    input {
      max-width: 25rem;
      width: 7rem;
      height: 1.5rem;
      padding: 1rem;
      background-color: #e7e9ee;
      border: none;
      border-radius: 1rem;
      font-size: 1rem;
      color: #000;

      transition: all 0.3s ease-in-out;

      &:focus {
        width: 25rem;
      }

      &::placeholder {
        color: #7a7a7a;
      }
    }
  }
`
