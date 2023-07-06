import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Dropdown from "../../ui/Dropdown";
import InputBox from "../../ui/InputBox";
import RangeInputs from "../../ui/RangeInputs";
import { RuleRowContainer, Combiner, StyledText, RemoveBtn, } from "../RulesList/RulesList.styles";
const RuleRow = ({ values, index, removeRule }) => {
    return (_jsxs(RuleRowContainer, { children: [_jsxs(StyledText, { children: [index + 1, "."] }), _jsx(Combiner, { children: index > 0 &&
                    _jsx(StyledText, Object.assign({ background: 'primaryBlue' }, { children: "And" })) }), _jsx(Dropdown, { value: values.name, options: [], variant: "rectangle", readOnly: true }), _jsx(Dropdown, { value: values.operator, options: [], variant: "rounded", readOnly: true }), values.fieldType !== 'number_range' ?
                _jsx(InputBox, { value: values.value, inputType: "string", readOnly: true })
                : _jsx(RangeInputs, { values: values.value, readOnly: true }), _jsx(RemoveBtn, { onClick: () => removeRule(values.name, values.operator) })] }));
};
export default RuleRow;
