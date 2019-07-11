import React from "react";
import useInterval from "../../hooks/useInterval";

import {
  Widget,
  Paper,
  Body,
  LeftBrow,
  LeftEye,
  RightBrow,
  RightEye,
  Bubble,
  Text,
  Item
} from "./Elements";

export default function Robbie({ prompts, delay, scale = 1 }) {
  const [isHover, setHover] = React.useState(false);
  const [activePrompt, setPrompt] = React.useState(
    Math.floor((Math.random() * prompts.length * 100) / 100)
  );

  useInterval(() => {
    const nextPrompt =
      activePrompt + 1 >= prompts.length ? 0 : activePrompt + 1;

    setPrompt(nextPrompt);
  }, delay || 1000);

  const currentPrompt = React.useMemo(() => {
    return (
      <React.Fragment>
        {prompts[activePrompt].text.map((str, i) => (
          <Text key={i}>{str}</Text>
        ))}
      </React.Fragment>
    );
  }, [prompts, activePrompt]);

  const items = React.useMemo(() => {
    if (!prompts[activePrompt].items) {
      return null;
    }
    return (
      <React.Fragment>
        {prompts[activePrompt].items.map(({ url, style }) => (
          <Item key={url} url={url} style={style} />
        ))}
      </React.Fragment>
    );
  }, [prompts, activePrompt]);
  return (
    <Widget size={10 * scale}>
      <Paper>
        <Body
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onTouchStart={() => setHover(true)}
          onTouchEnd={() => setHover(true)}
        >
          <RightEye />
          <LeftEye />
          <RightBrow
            style={{
              transform: isHover ? "translate(-5px, -5px) rotate(-20deg)" : ""
            }}
          />
          <LeftBrow
            style={{
              transform: isHover ? "translate(2px, 2px) rotate(2deg)" : ""
            }}
          />
          {items}
        </Body>
      </Paper>
      <Bubble>{currentPrompt}</Bubble>
    </Widget>
  );
}
