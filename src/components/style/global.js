import {createGlobalStyle} from 'styled-components';
import './fonts.css';
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif, 'Roboto Mono', monospace;
    transition: all 0.25s linear;
  }
  
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif, 'Roboto Mono', monospace;
    transition: all 0.25s linear;
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    font-family: 'Josefin Sans', sans-serif, 'Roboto Mono', monospace;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;
    font-family: 'Josefin Sans', sans-serif, 'Roboto Mono', monospace;
  }

  a {
    color: ${({theme}) => theme.text};
    font-family: 'Roboto Mono', monospace;
  }
`;
