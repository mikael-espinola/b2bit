import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        background-color: #efefef;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;