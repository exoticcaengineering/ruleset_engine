import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-useless-escape */
import { useEffect, useRef } from "react";
import styled from "styled-components";
const InputWrapper = styled.input `
  font-family: "Roboto";
  height: 35px;
  width: 190px;
  border: 1px solid ${({ theme }) => theme.colors.blueLight};
  cursor: pointer;
  position: relative;
  z-index: 10;
  background-color: white;
  margin-right: 20px;
  overflow: visible;
  box-sizing: border-box;
  padding: 0 7px;
  border-style: ${({ readOnly }) => readOnly ? 'dashed' : 'solid'};
  pointer-events: ${({ readOnly }) => readOnly ? 'none' : 'all'};

  &::placeholder {
    font-style: italic;
    font-weight: 100;
  }
`;
const InputBox = ({ inputType, onChange, value, readOnly }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (!value && ref.current)
            ref.current.value = "";
    }, [value]);
    const handleChange = (e) => {
        if (inputType === "number")
            e.target.value = e.target.value.replace(/[^0-9 \,]/, "");
        onChange && onChange(e.target.value);
    };
    return (_jsx(InputWrapper, { ref: ref, type: "text", onInput: handleChange, defaultValue: value || "", placeholder: "Enter value", readOnly: !!readOnly }));
};
export default InputBox;
