import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import { RulesetWrapper, StyledTitle } from "./RulesetEngine.styles";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import './fonts.css';
const RulesetEngine = (props) => {
    const [rules, setRules] = useState([]);
    useEffect(() => {
        console.log(rules);
        setRules([{ id: "hello" }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsxs(RulesetWrapper, { children: [_jsx(StyledTitle, { children: "Rules" }), _jsx(EmptyState, {})] }) })));
};
export default RulesetEngine;
