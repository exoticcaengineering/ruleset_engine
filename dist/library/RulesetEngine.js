import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import EmptyState from "./components/EmptyState/EmptyState";
// import Table from "./components/Table/Table";
import { RulesetWrapper } from "./RulesetEngine.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./fonts.css";
import RulesList from "./components/RulesList/RulesList";
import useSchema from "./hooks/useSchema";
import LoadingState from "./ui/LoadingState";
import useRules from "./hooks/useRules";
const RulesetEngine = ({ rulesetEndpoint, discountUuid, discountName, rulesetType, }) => {
    const { existingRules, setRules, addRule, removeRule } = useRules(rulesetEndpoint, discountUuid, discountName, rulesetType);
    const { error, schemaData, isLoading } = useSchema(`${rulesetEndpoint}/schema`);
    console.log(error);
    const switchView = () => {
        setRules([{ name: "placeholder", operator: "", value: "" }]);
    };
    if (isLoading)
        return _jsx(LoadingState, {});
    return (_jsxs(_Fragment, { children: [_jsxs("h4", { children: ["Rules ", _jsx("span", { children: discountUuid })] }), !existingRules.length ? (_jsx(EmptyState, { switchView: switchView })) : (_jsx(_Fragment, { children: _jsx(RulesList, { schema: schemaData, existingRules: existingRules.filter((i) => i.name !== "placeholder"), addRule: addRule, removeRule: removeRule }) }))] }));
};
const App = ({ rulesetEndpoint, discountUuid, discountName, rulesetType }) => {
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsx(RulesetWrapper, { children: _jsx(RulesetEngine, { rulesetEndpoint: rulesetEndpoint, discountUuid: discountUuid, discountName: discountName, rulesetType: rulesetType }) }) })));
};
export default App;
