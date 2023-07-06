/// <reference types="react" />
type CallError = {
    message: string;
    code: string;
};
declare const useRules: (url: string, discountUuid: string, discountName: string, rulesetType: RulesetType) => {
    existingRules: RuleValues[];
    setRules: import("react").Dispatch<import("react").SetStateAction<RuleValues[]>>;
    addRule: (newRule: RuleValues) => void;
    removeRule: (rulesetField: string, rulesetOperator: string) => void;
    loadingRules: boolean;
    errorRules: CallError | undefined;
};
export default useRules;
