import styled from "styled-components";

export const AppBar = styled.div`
  padding: 0.3rem;
  display: grid;
  grid-gap: 0.3rem;
  align-content: center;
  justify-content: center;
  grid-template-columns: max-content 1fr max-content;
  grid-auto-flow: columns;
  background-color: rgb(195, 199, 203);
  box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset,
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
`;

export const AppMenu = styled.div`
  display: grid;
`;
export const AppTabs = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  grid-auto-flow: column;
  grid-auto-columns: minmax(max-content, 15rem);
`;
export const AppControl = styled.div`
  display: grid;
`;
