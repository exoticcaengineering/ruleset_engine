import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
// import Table from "./components/Table/Table";
import "./fonts.css";
import { dummySchema } from "./utilities/dummyData";
import RulesList from "./components/RulesList/RulesList";
import useSchema from "./hooks/useSchema";
const RulesetEngine = ({ schemaEndpoint }) => {
    const [existingRules, setRules] = useState([]);
    const { error, schemaData, isLoading } = useSchema(schemaEndpoint);
    console.log(error);
    const switchView = () => {
        setRules([{ name: "placeholder", operator: "", value: "" }]);
    };
    const addRule = (newRule) => {
        setRules((prev) => [...prev, newRule]);
    };
    const removeRule = (key) => {
        const updatedRules = existingRules.filter((i) => i.name !== key);
        // const updatedRules = existingRules.filter(i => [key, 'placeholder'].indexOf(i.name!) ===  -1);
        setRules(updatedRules);
    };
    if (isLoading)
        return _jsx("h1", { children: "\u00F6\u00D6\u00F6" });
    return (_jsxs(_Fragment, { children: [_jsx("h4", { children: "Rules" }), !existingRules.length ? (_jsx(EmptyState, { switchView: switchView })) : (_jsx(_Fragment, { children: _jsx(RulesList, { schema: dummySchema, existingRules: existingRules.filter((i) => i.name !== "placeholder"), addRule: addRule, removeRule: removeRule }) }))] }));
};
export default RulesetEngine;
