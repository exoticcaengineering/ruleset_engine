/// <reference types="react" />
type Props = {
    index: number;
    values: RuleValues;
    removeRule(rulesetField: string, rulesetOperator: string): void;
};
declare const RuleRow: ({ values, index, removeRule }: Props) => JSX.Element;
export default RuleRow;
