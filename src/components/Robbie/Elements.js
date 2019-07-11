import styled from "styled-components";

import LeftEyeImage from "../../assets//images/left-eye.png";
import RightEyeImage from "../../assets/images/right-eye.png";
import RightBrowImage from "../../assets/images/right-brow.png";
import LeftBrowImage from "../../assets/images/left-brow.png";
import PaperImage from "../../assets/images/paper-trail.png";
import BodyImage from "../../assets/images/me.png";

export const Widget = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 20em;
  height: 20em;
  right: 0em;
  bottom: 2em;
  z-index: 10;
  font-size: ${({ size }) => `${size}px`};
`;

export const LeftEye = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${LeftEyeImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 2em;
  height: 2em;
  left: 6em;
  top: 3em;
`;

export const Item = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const RightEye = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${RightEyeImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 2em;
  height: 2em;
  left: 3.8em;
  top: 3em;
`;

export const LeftBrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${LeftBrowImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 2em;
  height: 2em;
  left: 3.5em;
  top: 2em;
`;

export const RightBrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${RightBrowImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: 0.25s;
  width: 2em;
  height: 2em;
  left: 6.5em;
  top: 2em;
  transition: 0.25s;
`;

export const Body = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${BodyImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 13em;
  width: 15em;
  transition: 0.25s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Paper = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: url(${PaperImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 17.5em;
  height: 17.5em;
`;

export const Bubble = styled.div`
  box-sizing: border-box;
  padding: 0.5em 1.5em;
  position: absolute;
  background-color: #fffdcd;
  width: 20em;
  bottom: calc(100% + 2.5em);
  right: 5em;
  border-radius: 10px;
  border: 1px solid #000;
  &:before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 100%;
    left: 10em;
    border: solid transparent;
    border-width: 1.1em;
    border-top: 1.2em solid #000;
    border-right: 1.1em solid #000;
  }

  &:after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 100%;
    left: 10.1em;
    border: solid transparent;
    border-width: 1em;
    border-top: 1em solid #fffdcd;
    border-right: 1em solid #fffdcd;
  }
`;

export const Text = styled.p`
  font-size: 1.5em;
`;
