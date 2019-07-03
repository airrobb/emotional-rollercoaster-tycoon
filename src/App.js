import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import msSans from "./assets/fonts/ms-sans-serif.woff2";

const Global = createGlobalStyle`
@font-face {
  font-family: "MS Sans";
  src: url("${msSans}"),
}

* {
    box-sizing: border-box;
    font-family: "MS Sans";
}


html,
body {
  margin: 0;
  font-family: "MS Sans", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.app {
    display: grid;
    grid-auto-rows: min-content;
    grid-template-areas:
      'body'
      'navigation';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr max-content;
    height: 100%;
    width: 100%;
  }
`;

const Main = styled.div`
  grid-area: body;
  background-color: rgb(85, 170, 170);
`;

const Navigation = styled.div`
  grid-area: navigation;
`;

const Browser = styled.div``;

const StartBar = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-flow: columns;
  background-color: rgb(195, 199, 203);
  box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset,
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: rgb(195, 199, 203);
  box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset,
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
`;

const IconButton = styled.button``;

const InsetRow = styled.div``;

const Timer = styled.div``;

function App() {
  return (
    <React.Fragment>
      <Global />
      <Main>Hello</Main>
      <Navigation>
        <StartBar>
          <Button>Start</Button>
          <InsetRow>
            <Timer>9:45 am</Timer>
          </InsetRow>
        </StartBar>
      </Navigation>
    </React.Fragment>
  );
}

export default App;
