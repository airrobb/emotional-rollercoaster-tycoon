import React from "react";
// Containers
import Game from "./containers/Game";
//Styles
import Global from "./styles/global";
import Robbie from "./components/Robbie";
import Quotes from "./components/Robbie/defaultPrompts";

const filteredQuotes = Quotes.filter(({ tags }) => tags.includes("scam"));

function App() {
  return (
    <React.Fragment>
      <Global />
      <Game />
      <Robbie
        prompts={filteredQuotes}
        key={filteredQuotes.length}
        delay={10000}
        scale={1}
      />
    </React.Fragment>
  );
}

export default App;
