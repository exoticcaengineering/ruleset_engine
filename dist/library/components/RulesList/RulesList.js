import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RuleRow from "../RuleRow/RuleRow";
import RuleInputs from "../RuleInputs/RuleInputs";
import { RulesWrapper } from "./RulesList.styles";
const RulesList = ({ schema, existingRules, addRule, removeRule }) => {
    const filteredSchema = () => schema.filter((schema) => !existingRules.find((rule) => rule.name === schema.name));
    return (_jsxs(RulesWrapper, Object.assign({ border: !!existingRules.length }, { children: [_jsx(RuleInputs, { schema: filteredSchema(), addFilter: addRule }), _jsx("div", Object.assign({ className: "existingRules" }, { children: existingRules.map((i, index) => (_jsx(RuleRow, { index: index, values: i, removeRule: removeRule }, i.name))) }))] })));
};
export default RulesList;
