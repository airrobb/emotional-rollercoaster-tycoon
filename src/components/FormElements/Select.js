import React from "react";
import styled from "styled-components";

import FieldWrapper from "./FieldWrapper";

const SelectElement = styled.select``;

export default function Select(props) {
  const { name, value, onChange, disabled, placeholder, options } = props;

  return (
    <FieldWrapper>
      <SelectElement
        type="select"
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      >
        {options.map(({ text, value }) => {
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </SelectElement>
    </FieldWrapper>
  );
}
