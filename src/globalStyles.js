import styled, { createGlobalStyle } from "styled-components";
import image1 from "./assets/bgImage1.png";
import image2 from "./assets/bgImage2.png";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;

export const Container = styled.div.attrs((props) => ({
  width: props.width,
  height: props.height,
  pr: props.pr,
  pl: props.pl,
  pb: props.pb,
  pt: props.pt,
}))`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  overflow: ${({ overflow }) => (overflow ? "visible" : "hidden")};
  padding-right: ${({ pr }) => (pr ? pr : "0px")};
  padding-left: ${({ pl }) => (pl ? pl : "0px")};
  padding-bottom: ${({ pb }) => (pb ? pb : "0px")};
  padding-top: ${({ pt }) => (pt ? pt : "0px")};
  display: ${({ display }) => (display ? display : "block")};
  flex-direction: ${({ flexDr }) => (flexDr ? flexDr : "initial")};
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
  align-items: center;
`;

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BgImageContainer = styled.div`
  width: 100%;
  min-height: 165vh;
  background-image: url(${image1}), url(${image2});
  background-repeat: no-repeat;
  background-position: right top, left bottom;
  background-size: 744px 933px, 632px 604px;
`;

export const Section = styled.div.attrs((props) => ({
  name: props.name,
  pr: props.pr,
  pl: props.pl,
  pb: props.pb,
  pt: props.pt,
}))`
  display: block;
  padding-right: ${({ pr }) => (pr ? pr : "0px")};
  padding-left: ${({ pl }) => (pl ? pl : "0px")};
  padding-bottom: ${({ pb }) => (pb ? pb : "0px")};
  padding-top: ${({ pt }) => (pt ? pt : "0px")};
  width: 100%;
`;

export const TextHeader = styled.h1`
  font-size: 64px;
  color: #18a7b9;
  font-weight: 700;
`;

export const HeaderSpan = styled.span`
  font-size: 64px;
  color: #313131;
  font-weight: 700;
`;

export const Paragraph = styled.span`
  font-size: 18px;
  color: #6b6b6b;
  font-weight: 400;
  text-align: ${({ center }) => (center ? "center" : "start")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
`;

export const Margin = styled.div`
  display: ${({ display }) => (display ? "inline" : "block")};
  margin-right: ${({ mr }) => (mr ? mr : "0px")};
  margin-left: ${({ ml }) => (ml ? ml : "0px")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0px")};
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
`;

export const MainButton = styled.button`
  background: ${({ outline }) => (outline ? "#FFFFFF" : "#18a7b9")};
  font-size: 17px;
  font-weight: 500;
  display: inline;
  border: ${({ outline }) => (outline ? "1px solid #18a7b9" : "none")};
  border-radius: 40px 5px;
  width: ${({ width }) => (width ? "220px" : "214px")};
  height: ${({ height }) => (height ? "56px" : "64px")};
  color: ${({ outline }) => (outline ? "#18A7B9" : "#FFFFFF")};
  align-self: ${({ alignSelf }) => (alignSelf ? "flex-start" : "none")};
  text-align: center;
  display: ${({ Icon }) => (Icon ? "flex" : "inline")};
  flex-direction: ${({ Icon }) => (Icon ? "row" : "none")};
  justify-content: ${({ Icon }) => (Icon ? "center" : "none")};
  align-items: ${({ Icon }) => (Icon ? "center" : "none")};
`;

export const Heading2 = styled.h2`
  font-size: 54px;
  color: #313131;
  font-weight: 500;
  line-height: 120%;
  display: inline;
`;

export const Heading3 = styled.h2`
  font-size: 54px;
  color: #313131;
  font-weight: 600;
  line-height: 56px;
  text-align: center;
`;
