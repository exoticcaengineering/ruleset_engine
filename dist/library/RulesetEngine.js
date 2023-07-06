import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
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
    const { error, isLoading, schemaData } = useSchema(`${rulesetEndpoint}/schema`);
    console.log(error);
    // const schemaData = dummySchema;
    const switchView = () => {
        setRules([{ name: "placeholder", operator: "", value: "", fieldType: undefined }]);
    };
    if (isLoading)
        return _jsx(LoadingState, {});
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsx(RulesetWrapper, { children: !existingRules.length ? (_jsx(EmptyState, { switchView: switchView })) : (_jsx(_Fragment, { children: _jsx(RulesList, { schema: schemaData, existingRules: existingRules.filter((i) => i.name !== "placeholder"), addRule: addRule, removeRule: removeRule }) })) }) })));
};
export default RulesetEngine;
