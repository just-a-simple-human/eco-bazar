import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import poppinsRegular from "./fonts/Poppins-Regular.ttf";
import poppinsMedium from "./fonts/Poppins-Medium.ttf";
import poppinsSemiBold from "./fonts/Poppins-SemiBold.ttf";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const Global = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${poppinsRegular});
  }
  @font-face {
    font-family: "Poppins Medium";
    src: url(${poppinsMedium});
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
    overflow-y: hidden;
    overflow-x: hidden;

  }

  p, a, button, path, img {
    transition: all .5s;
  }
  article, form {
    transition: border .5s, box-shadow .5s;
  }
  div {
    transition: opacity .5s;
  }

  ul {

    list-style: none;

  }

  button, a {

    cursor: pointer;
    
  }

  img {

    object-fit: cover;

  }

  svg {

    pointer-events: none;

  }

  .swiper-slide {

    width: 320px;

  }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
