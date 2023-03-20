import RuleRow from "../RuleRow/RuleRow";
import RuleInputs from "../RuleInputs/RuleInputs";
import { RulesWrapper } from "./RulesList.styles";

type Props = {
  schema: RuleSchema[];
  existingRules: RuleValues[];
  addRule: (newRule: RuleValues) => void;
  removeRule: (key: string) => void;
};

const RulesList = ({ schema, existingRules, addRule, removeRule }: Props) => {
  const filteredSchema = () =>
    schema.filter(
      (schema) => !existingRules.find((rule) => rule.name === schema.name)
    );

  return (
    <RulesWrapper border={!!existingRules.length}>
      <RuleInputs schema={filteredSchema()} addFilter={addRule} />
      <div className="existingRules">
        {existingRules.map((i: RuleValues, index: number) => (
          <RuleRow
            key={i.name}
            index={index}
            values={i}
            removeRule={removeRule}
          />
        ))}
      </div>
    </RulesWrapper>
  );
};

export default RulesList;
