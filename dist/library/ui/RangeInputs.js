import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styled from "styled-components";
const RangeInputsContainer = styled.div `
  display: flex;
  font-family: "Roboto";
  width: 190px;
  margin-right: 20px;
`;
const RangeItem = styled.div `
  display: flex;
  align-items: center;
  margin-right: 8px;

  p {
    margin: 0 5px 0 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.blueLight};
  }
  input {
    height: 35px;
    width: 60px;
    border-radius: 3px;
    border: 1px ${({ theme }) => theme.colors.blueLight};
    border-style: ${({ readOnly }) => (readOnly ? "dashed" : "solid")};
    pointer-events: ${({ readOnly }) => (readOnly ? "none" : "all")};
  }
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}
`;
const RangeInputs = ({ onChange, values, readOnly }) => {
    const [localValues, setLocalValues] = useState(values);
    const handleChange = (e, key) => {
        setLocalValues((prev) => (Object.assign(Object.assign({}, prev), { [key]: Number(e.target.value) })));
    };
    useEffect(() => {
        onChange && onChange(localValues);
    }, [localValues, onChange]);
    return (_jsxs(RangeInputsContainer, { children: [_jsxs(RangeItem, Object.assign({ readOnly: !!readOnly }, { children: [_jsx("p", { children: "Min" }), _jsx("input", { type: "number", min: 0, onInput: (e) => handleChange(e, 'min'), defaultValue: localValues.min || 0, readOnly: !!readOnly })] })), _jsxs(RangeItem, Object.assign({ readOnly: !!readOnly }, { children: [_jsx("p", { children: "Max" }), _jsx("input", { type: "number", min: 0, onInput: (e) => handleChange(e, 'max'), defaultValue: localValues.max || 10, readOnly: !!readOnly })] }))] }));
};
export default RangeInputs;
