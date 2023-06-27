/// <reference types="react" />
type Props = {
    schema: RuleSchema[];
    addRule(newFilter: RuleValues): void;
};
declare const RuleInputs: ({ schema, addRule }: Props) => JSX.Element;
export default RuleInputs;
