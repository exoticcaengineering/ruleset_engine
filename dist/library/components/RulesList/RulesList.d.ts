/// <reference types="react" />
type Props = {
    schema: RuleSchema[];
    existingRules: RuleValues[];
    addRule: (newRule: RuleValues) => void;
    removeRule: (key: string) => void;
};
declare const RulesList: ({ schema, existingRules, addRule, removeRule }: Props) => JSX.Element;
export default RulesList;
