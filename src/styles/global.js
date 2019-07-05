import { createGlobalStyle } from "styled-components";

// Images
import DefaultCursor from "./../assets/images/cursor-default.png";
import { MsSansSerif } from "./fonts";

const Global = createGlobalStyle`
${MsSansSerif}

* {
    box-sizing: border-box;
    font-family: "MS Sans Serif";
}


html,
body {
  cursor: url(${DefaultCursor}), auto;
  margin: 0;
  font-family: "MS Sans Serif", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
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

export default Global;
