import { useEffect, useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import { RulesetWrapper, StyledTitle } from "./RulesetEngine.styles";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import './fonts.css'
type Props = {};

const RulesetEngine = (props: Props) => {
  const [rules, setRules] = useState<{ id: string }[]>([]);
  useEffect(() => {
    console.log(rules);
    setRules([{ id: "hello" }]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <ThemeProvider theme={defaultTheme}>
      <RulesetWrapper>
        <StyledTitle>
          Rules
        </StyledTitle>
        <EmptyState/>
      </RulesetWrapper>
    </ThemeProvider>
  );
};

export default RulesetEngine;
