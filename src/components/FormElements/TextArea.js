import React from "react";
import styled from "styled-components";
import FieldWrapper from "./FieldWrapper";

const TextAreaElement = styled.textarea``;

export default function TextArea(props) {
  const { name, value, onChange, disabled, placeholder, rows } = props;

  return (
    <FieldWrapper>
      <TextAreaElement
        rows={rows}
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
