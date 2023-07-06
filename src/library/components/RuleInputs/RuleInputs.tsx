import { useState } from "react";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import InputBox from "../../ui/InputBox";
import RangeInputs from "../../ui/RangeInputs";
import { RuleInputsWrapper } from "./RuleInputs.styles";

type Props = {
  schema: RuleSchema[];
  addRule(newFilter: RuleValues): void;
};

const initialValues: RuleValues = {
  name: null,
  operator: null,
  value: null,
  fieldType: undefined,
};
const RuleInputs = ({ schema, addRule }: Props) => {
  const [inputValues, setValues] = useState<RuleValues>(initialValues);
  const [currentSchema, setSchema] = useState<RuleSchema | null>(null);

  const updateValue = (key: string, value: any) => {
    setValues({ ...inputValues, [key]: value });
  };

  const selectSchema = (value: string) => {
    const selectedSchema = schema.find((i) => i.name === value);
    if(selectedSchema){
      setValues(initialValues);
      setSchema(selectedSchema);
      setValues({
        ...initialValues,
        name: selectedSchema.name,
        fieldType: selectedSchema.fieldType,
      });
    }
  };

  const handleAddRule = (e: any) => {
    e.preventDefault();
    setSchema(null);
    addRule(inputValues);
    setValues(initialValues);
  };

  return (
    <RuleInputsWrapper>
      <Dropdown
        value={inputValues.name}
        options={schema.map((i) => i.name)}
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
      {currentSchema?.fieldType !== "number_range" ? (
        <InputBox
          value={inputValues.value || ""}
          inputType={currentSchema?.fieldType}
          onChange={(val: string) => updateValue("value", val)}
        />
      ) : (
        <RangeInputs
          values={inputValues.value || { min: 0, max: 10 }}
          onChange={(val: string) => updateValue("value", val)}
        />
      )}
      <Button
        disabled={
          !!Object.values(inputValues).some((i) => i === null || i === "")
        }
        onClick={(e) => handleAddRule(e)}
        text="+ Add rule"
      />
    </RuleInputsWrapper>
  );
};

export default RuleInputs;
