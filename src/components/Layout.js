import styled from "styled-components";

export const Main = styled.div`
  grid-area: body;
  background-color: rgb(85, 170, 170);
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const Navigation = styled.div`
  grid-area: navigation;
  position: relative;
  z-index: 2;
`;
