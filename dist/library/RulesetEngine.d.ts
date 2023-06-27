/// <reference types="react" />
import "./fonts.css";
type Props = {
    rulesetEndpoint: string;
    discountUuid: string;
    discountName: string;
};
declare const App: ({ rulesetEndpoint, discountUuid, discountName }: Props) => JSX.Element;
export default App;
