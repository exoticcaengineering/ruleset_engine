import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import InputBox from "../../ui/InputBox";
import { RuleInputsWrapper } from "./RuleInputs.styles";
const initialValues = {
    name: null,
    operator: null,
    value: null
};
const RuleInputs = ({ schema, addRule }) => {
    const [inputValues, setValues] = useState(initialValues);
    const [currentSchema, setSchema] = useState(null);
    const updateValue = (key, value) => {
        setValues(Object.assign(Object.assign({}, inputValues), { [key]: value }));
    };
    const selectSchema = (value) => {
        const selectedSchema = schema.find(i => i.name === value);
        setSchema(selectedSchema);
        setValues(Object.assign(Object.assign({}, initialValues), { name: value }));
    };
    const handleAddRule = () => {
        setSchema(null);
        addRule(inputValues);
        setValues(initialValues);
    };
    return (_jsxs(RuleInputsWrapper, { children: [_jsx(Dropdown, { value: inputValues.name, options: schema.map(i => i.name), variant: "rectangle", onSelect: (val) => selectSchema(val) }), _jsx(Dropdown, { value: inputValues.operator, disabled: !currentSchema, options: (currentSchema === null || currentSchema === void 0 ? void 0 : currentSchema.operators) || [], variant: "rounded", onSelect: (val) => updateValue("operator", val) }), _jsx(InputBox, { value: inputValues.value || '', inputType: (currentSchema === null || currentSchema === void 0 ? void 0 : currentSchema.fieldType) === "number" ? "number" : "text", onChange: (val) => updateValue("value", val) }), _jsx(Button, { disabled: !!Object.values(inputValues).some((i) => i === null || i === ""), onClick: handleAddRule, text: "+ Add rule" })] }));
};
export default RuleInputs;
