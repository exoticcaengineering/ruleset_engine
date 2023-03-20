import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import Table from "./components/Table/Table";
import { RulesetWrapper } from "./RulesetEngine.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./fonts.css";
import { dummySchema } from "./utilities/dummyData";
import RulesList from "./components/RulesList/RulesList";
import useSchema from "./hooks/useSchema";
type Props = {
  schemaEndpoint: string;
};

const RulesetEngine = ({schemaEndpoint}: Props) => {
  const [existingRules, setRules] = useState<RuleValues[]>([]);
  const { error } = useSchema(schemaEndpoint);
  console.log(error);

  const switchView = () => {
    setRules([{ name: "placeholder", operator: "", value: "" }]);
  }

  const addRule = (newRule: RuleValues) => {
    setRules((prev) => [...prev, newRule]);
  };

  const removeRule = (key: string) => {
    const updatedRules = existingRules.filter(i => i.name !== key);
    // const updatedRules = existingRules.filter(i => [key, 'placeholder'].indexOf(i.name!) ===  -1);
    setRules(updatedRules)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <RulesetWrapper>
        <h4>Rules</h4>
        {!existingRules.length ? (
          <EmptyState switchView={switchView} />
        ) : (
          <>
            <RulesList
              schema={dummySchema}
              existingRules={existingRules.filter((i) => i.name !== "placeholder")}
              addRule={addRule}
              removeRule={removeRule}
            />
            <Table />
          </>
        )}
      </RulesetWrapper>
    </ThemeProvider>
  );
};

export default RulesetEngine;
