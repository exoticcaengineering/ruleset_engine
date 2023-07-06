/// <reference types="react" />
import "./fonts.css";
type Props = {
    rulesetEndpoint: string;
    discountUuid: string;
    discountName: string;
    rulesetType: RulesetType;
};
declare const RulesetEngine: ({ rulesetEndpoint, discountUuid, discountName, rulesetType, }: Props) => JSX.Element;
export default RulesetEngine;
