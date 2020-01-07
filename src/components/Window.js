import styled from "styled-components";

export const Window = styled.div`
  position: relative;
  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset,
    rgb(136, 140, 143) -1px -1px 0px 1px inset;
  box-sizing: border-box;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-areas:
    "header"
    "control"
    "content";
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr;
`;

export const WindowHeader = styled.div`
  display: grid;
  grid-auto-flow: columnns;
  grid-template-columns: 1fr max-content;
  height: 3rem;
  line-height: 3rem;
  margin-right: 2px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding: 0px 0.5rem;
  background: linear-gradient(to right, rgb(0, 0, 128), rgb(16, 52, 166));
`;

export const WindowHeaderTitle = styled.div``;

export const WindowHeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const WindowControl = styled.div`
  grid-area: control;
  padding: 2px;
`;

export const WindowControlMenu = styled.div`
  display: grid;
  padding: 0.2rem;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
`;

export const WindowControlMenuItem = styled.button`
  font-size: 1.2rem;
  border-style: solid;
  border-width: 2px;
  line-height: 1.5rem;
  padding: 0 0.8rem;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    border-left-color: rgb(255, 255, 255);
    border-top-color: rgb(255, 255, 255);
    border-right-color: rgb(136, 140, 143);
    border-bottom-color: rgb(136, 140, 143);
  }
  &::first-letter {
    text-decoration: underline;
  }
  &:active,
  &:focus {
    outline-offset: -5px;
    box-shadow: rgb(134, 138, 142) 0px 0px 0px 1px inset,
      rgb(0, 0, 0) 0px 0px 0px 1px;
    outline: rgb(0, 0, 0) dotted 1px;
  }
`;

const PADDING_SIZES = {
  s: "0 0.5rem",
  l: "1rem 2rem"
};

const getPadding = ({ padding }) => {
  return padding ? `padding: ${PADDING_SIZES[padding]}` : "";
};

export const WindowControlRow = styled.div`
  display: flex;
  align-item: center;
  border-top: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid rgb(136, 140, 143);

  > * {
    ${getPadding}
  }
`;

export const WindowControlDivider = styled.div`
  border-left: 2px solid rgb(136, 140, 143);
  border-right: 2px solid rgb(255, 255, 255);
  margin: 0px;
`;

const SIZES = {
  s: "4rem",
  m: "6rem",
  r: "10rem",
  l: "16rem",
  xl: "24rem",
  fill: "auto",
  content: "content"
};

const getSize = ({ size }) => {
  if (size === "fill") {
    return "flex: 1;";
  } else {
    return `flex-basis: ${SIZES[size]}`;
  }
};

export const WindowControlColumn = styled.div`
  ${getSize}
  flex-flow: column;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const WindowContent = styled.div`
  grid-area: content;
  border-style: solid;
  border-width: 2px;
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(5, 6, 8);
  border-left-color: rgb(5, 6, 8);
`;
