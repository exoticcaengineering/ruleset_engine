import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import Table from "./components/Table/Table";
import { RulesetWrapper } from "./RulesetEngine.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./fonts.css";
import { dummySchema } from "./utilities/dummyData";
import RulesList from "./components/RulesList/RulesList";
import useSchema from "./hooks/useSchema";
const RulesetEngine = ({ schemaEndpoint }) => {
    const [existingRules, setRules] = useState([]);
    const { error } = useSchema(schemaEndpoint);
    console.log(error);
    const switchView = () => {
        setRules([{ name: "placeholder", operator: "", value: "" }]);
    };
    const addRule = (newRule) => {
        setRules((prev) => [...prev, newRule]);
    };
    const removeRule = (key) => {
        const updatedRules = existingRules.filter(i => i.name !== key);
        // const updatedRules = existingRules.filter(i => [key, 'placeholder'].indexOf(i.name!) ===  -1);
        setRules(updatedRules);
    };
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsxs(RulesetWrapper, { children: [_jsx("h4", { children: "Rules" }), !existingRules.length ? (_jsx(EmptyState, { switchView: switchView })) : (_jsxs(_Fragment, { children: [_jsx(RulesList, { schema: dummySchema, existingRules: existingRules.filter((i) => i.name !== "placeholder"), addRule: addRule, removeRule: removeRule }), _jsx(Table, {})] }))] }) })));
};
export default RulesetEngine;
