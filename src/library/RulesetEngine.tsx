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
import { dummySchema } from "./utilities/dummyData";
type Props = {
  rulesetEndpoint: string;
  discountUuid: string;
  discountName: string;
  rulesetType: RulesetType
};

const RulesetEngine = ({
  rulesetEndpoint,
  discountUuid,
  discountName,
  rulesetType,
}: Props) => {
  const { existingRules, setRules, addRule, removeRule } = useRules(
    rulesetEndpoint,
    discountUuid,
    discountName,
    rulesetType
  );
  const { error, isLoading, schemaData } = useSchema(
    `${rulesetEndpoint}/schema`
  );
  console.log(error);
    // const schemaData = dummySchema;
  const switchView = () => {
    setRules([{ name: "placeholder", operator: "", value: "", fieldType: undefined }]);
  };

  if (isLoading) return <LoadingState />;

  return (
    <ThemeProvider theme={defaultTheme}>
      <RulesetWrapper>
        
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
      </RulesetWrapper>
    </ThemeProvider>
  );
};

export default RulesetEngine;
