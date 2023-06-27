import RulesetEngine from "./library/RulesetEngine";

function App() {
  return (
    <div style={{ height: "400px", width: "calc(100vw - 300px)" }}>
      <RulesetEngine
        rulesetEndpoint={"https://develop-adiona.exoticca.com:3006/adiona/api/ruleset"}
        discountUuid={"ff17d8dd-a797-400a-b22f-4c85da3b2dcb"}
      />
    </div>
  );
}

export default App;
