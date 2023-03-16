import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import Table from "./components/Table/Table";
import { RulesetWrapper } from "./RulesetEngine.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./fonts.css";
import InputRow from "./components/InputRow/InputRow";
const RulesetEngine = (props) => {
    const [rules, setRules] = useState([]);
    const switchView = () => {
        setRules([{ id: '' }]);
    };
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsxs(RulesetWrapper, { children: [_jsx("h4", { children: "Rules" }), !rules.length ? (_jsx(EmptyState, { switchView: switchView })) : (_jsxs(_Fragment, { children: [_jsx(InputRow, {}), _jsx(Table, {})] }))] }) })));
};
export default RulesetEngine;
