import RulesetEngine from "./library/RulesetEngine";

function App() {
  return (
    <div style={{ height: "400px", width: "calc(100vw - 300px)" }}>
      <RulesetEngine
        schemaEndpoint={"https://develop-adiona.exoticca.com:3006/adiona/api/ruleset/schema"}
        // schemaEndpoint={"http://develop.exoticca.com/adiona/api/ruleset/schema"}
      />
    </div>
  );
}

export default App;
