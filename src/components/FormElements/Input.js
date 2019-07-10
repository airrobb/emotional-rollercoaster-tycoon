import React from "react";
import styled from "styled-components";

import FieldWrapper from "./FieldWrapper";

const InputElement = styled.input`
  border: none;

  &:focus,
  &:active {
    outline: none;
  }
`;

export default function Input(props) {
  const { name, value, onChange, disabled, placeholder, type } = props;

  return (
    <FieldWrapper>
      <InputElement
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FieldWrapper>
  );
}
