import styled from "styled-components";

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${({ icon }) => icon});
  margin: 0 0.5rem 0 ${({ marginOffset }) => (marginOffset ? "-0.5rem" : "0")};
  background-size: ${({ scale }) => `${100 * scale}%`};
  background-repeat: no-repeat;
  background-position: center center;
`;

Icon.defaultProps = {
  scale: 1,
  marginOffset: true
};

export default Icon;
