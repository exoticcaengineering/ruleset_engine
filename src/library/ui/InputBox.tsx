/* eslint-disable no-useless-escape */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  inputType: "number" | "text";
  onChange?: (val: string) => void;
  value: string | null;
  readOnly?: boolean;
};
const InputWrapper = styled.input<{ readOnly: boolean }>`
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

const InputBox = ({ inputType, onChange, value, readOnly }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!value && ref.current) ref.current!.value = "";
  }, [value]);

  const handleChange = (e: any) => {
    if (inputType === "number")
      e.target!.value = e.target.value.replace(/[^0-9 \,]/, "");
    onChange && onChange(e.target.value);
  };

  return (
    <InputWrapper
      ref={ref}
      type="text"
      onInput={handleChange}
      defaultValue={value || ""}
      placeholder={"Enter value"}
      readOnly={!!readOnly}
    />
  );
};

export default InputBox;
