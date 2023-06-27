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
type Props = {
  rulesetEndpoint: string;
  discountUuid: string;
  discountName: string;
};

const RulesetEngine = ({ rulesetEndpoint, discountUuid, discountName }: Props) => {
  const {existingRules, setRules} = useRules(rulesetEndpoint, discountUuid, discountName);
  const { error, schemaData, isLoading } = useSchema(`${rulesetEndpoint}/schema`);
  console.log(error);

  const switchView = () => {
    setRules([{ name: "placeholder", operator: "", value: "" }]);
  };

  const addRule = (newRule: RuleValues) => {
    setRules((prev) => [...prev, newRule]);
  };

  const removeRule = (key: string) => {
    const updatedRules = existingRules.filter((i) => i.name !== key);
    setRules(updatedRules);
  };
  
  if(isLoading) return (
    <LoadingState/>
  )

  return (
    <>
      <h4>Rules <span>{discountUuid}</span></h4>
      {!existingRules.length ? (
        <EmptyState switchView={switchView} />
      ) : (
        <>
          <RulesList
            schema={schemaData}
            existingRules={existingRules.filter(
              (i) => i.name !== "placeholder"
            )}
            addRule={addRule}
            removeRule={removeRule}
          />
          {/* // Table component to be excluded until V2 */}
          {/* <Table /> */}
        </>
      )}
    </>
  );
};

const App = ({ rulesetEndpoint, discountUuid, discountName }: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RulesetWrapper>
        <RulesetEngine
          rulesetEndpoint={rulesetEndpoint}
          discountUuid={discountUuid}
          discountName={discountName}
        />
      </RulesetWrapper>
    </ThemeProvider>
  );
}

export default App;
