/// <reference types="react" />
type Props = {
    schema: RuleSchema[];
    addFilter(newFilter: RuleValues): void;
};
declare const RuleInputs: ({ schema, addFilter }: Props) => JSX.Element;
export default RuleInputs;
