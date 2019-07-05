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
  display: inline-block;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  width: 100%;
  height: 100%;
`;

export const WindowHeader = styled.div`
  display: grid;
  grid-auto-flow: columnns;
  grid-template-columns: 1fr max-content;
  height: 3rem;
  line-height: 3rem;
  margin-right: 2px;
  margin-bottom: 4px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding: 0px 0.5rem;
  background: linear-gradient(to right, rgb(0, 0, 128), rgb(16, 52, 166));
`;

export const WindowTitle = styled.div``;

export const WindowControl = styled.div`
  display: flex;
  align-items: center;
`;
