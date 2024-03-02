import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components';
import poppinsRegular from './fonts/Poppins-Regular.ttf';
import poppins$medium from './fonts/Poppins-Medium.ttf';
import poppinsSemiBold from './fonts/Poppins-SemiBold.ttf';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Global = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${poppinsRegular});
  }
  @font-face {
    font-family: "Poppins Medium";
    src: url(${poppins$medium});
  }
  @font-face {
    font-family: "Poppins SemiBold";
    src: url(${poppinsSemiBold});
  }
  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
    border-image: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    
  }

  body {

    min-width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;

  }

  button, a {

    cursor: pointer;
    
  }

  svg {

    pointer-events: none;

  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Global/>
        <App></App>
      </BrowserRouter>
  </React.StrictMode>
  
);
