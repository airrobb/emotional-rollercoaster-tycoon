import styled from "styled-components";
import { lighten } from "polished";

export const Button = styled.button`
  padding: ${({ square }) => (square ? "auto" : "0.4rem 1.2rem")};
  font-weight: 600;
  text-align: left;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset,
    rgb(136, 140, 143) -1px -1px 0px 1px inset;
  ${({ square }) => square && `width: 2rem; height: 2rem;  `}
  ${({ active }) =>
    active &&
    `
  border-width: 0.2rem;
  background-color: ${lighten(0.2, `rgb(206, 208, 207)`)}
  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);   
  box-shadow: rgb(134, 138, 142) 0px 0px 0px 1px inset,
  rgb(0, 0, 0) 0px 0px 0px 1px;    
  `}

&:active, &:focus {
    outline-offset: -5px;
    box-shadow: rgb(134, 138, 142) 0px 0px 0px 1px inset,
      rgb(0, 0, 0) 0px 0px 0px 1px;
    outline: rgb(0, 0, 0) dotted 1px;
  }
`;

export default Button;
