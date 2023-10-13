import { createGlobalStyle } from 'styled-components';
import ManropeRegular from "./fonts/Manrope-Regular.ttf";
import PopoinsRegular from "./fonts/Poppins-Regular.ttf"
import innerBold from "./fonts/Inter-Bold.ttf";
import PoppinsBold from "./fonts/Poppins-Bold.ttf";
import PoppinsMedium from "./fonts/Poppins-Medium.ttf";
import RobotoRegular from "./fonts/Roboto-Regular.ttf";
import RobotoBold from "./fonts/Roboto-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins-Medium';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'Poppins-Regular';
    src: url(${PopoinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'Poppins-Bold';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'Inter-Bold';
    src: url(${innerBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'Roboto-Bold';
    src: url(${RobotoBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'Manrope-Regular';
    src: url(${ManropeRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };
`;