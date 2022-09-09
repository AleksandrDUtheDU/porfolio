import { createGlobalStyle } from "styled-components";
import Roboto500 from "../../resources/fonts/Roboto-Medium.ttf";
import Roboto700 from "../../resources/fonts/Roboto-Bold.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto500}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
}

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto700}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}
`;

export default FontStyles;