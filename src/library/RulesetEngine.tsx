import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import Table from "./components/Table/Table";
import { RulesetWrapper } from "./RulesetEngine.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./fonts.css";
import InputRow from "./components/InputRow/InputRow";
type Props = {};

const RulesetEngine = (props: Props) => {
  const [rules, setRules] = useState<{ id: string }[]>([]);

  const switchView = () => {
    setRules([{id:''}])
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <RulesetWrapper>
        <h4>Rules</h4>
        {!rules.length ? (
          <EmptyState switchView={switchView} />
        ) : (
          <>
            <InputRow />
            <Table/>
          </>
        )}
      </RulesetWrapper>
    </ThemeProvider>
  );
};

export default RulesetEngine;
