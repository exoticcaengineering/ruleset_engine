import { jsx as _jsx } from "react/jsx-runtime";
import { RulesetWrapper } from "./RulesetEngine.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./fonts.css";
const RulesetEngine = ({ schemaEndpoint }) => {
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsx(RulesetWrapper, { children: _jsx(RulesetEngine, { schemaEndpoint: schemaEndpoint }) }) })));
};
export default RulesetEngine;
