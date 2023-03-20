import { useState } from "react";
import Button from "../../ui/Button"
import Dropdown from "../../ui/Dropdown"
import InputBox from "../../ui/InputBox";
import { RuleInputsWrapper } from "./RuleInputs.styles"

type Props = {
  schema: RuleSchema[];
  addFilter(newFilter: RuleValues): void;
}

const initialValues: RuleValues = {
  name: null,
  operator: null,
  value: null
}
const RuleInputs = ({ schema, addFilter }: Props) => {
  const [inputValues, setValues] = useState<RuleValues>(initialValues);
  const [ currentSchema, setSchema ] = useState<RuleSchema | null>(null)

  const updateValue = (key: string, value: any) => {
    setValues({ ...inputValues, [key]: value });
  };

  const selectSchema = (value: string) => {
    const selectedSchema = schema.find(i => i.name === value);
    setSchema(selectedSchema!);
    setValues({ ...initialValues, name: value })
  }

  const handleAddRule = () => {
    setSchema(null)
    addFilter(inputValues)
    setValues(initialValues)
  };

  return (
    <RuleInputsWrapper>
      <Dropdown
        value={inputValues.name}
        options={schema.map(i => i.name)}
        variant={"rectangle"}
        onSelect={(val: string) => selectSchema(val)}
      />
      <Dropdown
        value={inputValues.operator}
        disabled={!currentSchema}
        options={currentSchema?.operators || []}
        variant={"rounded"}
        onSelect={(val: string) => updateValue("operator", val)}
      />
      <InputBox
        value={inputValues.value || ''}
        inputType={currentSchema?.fieldType !== "string" ? "number" : "text"}
        onChange={(val: string) => updateValue("value", val)}
      />
      <Button
        disabled={
          !!Object.values(inputValues).some((i) => i === null || i === "")
        }
        onClick={handleAddRule}
        text="+ Add rule"
      />
    </RuleInputsWrapper>
  );
}

export default RuleInputs