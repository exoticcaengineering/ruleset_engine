import Dropdown from "../../ui/Dropdown";
import InputBox from "../../ui/InputBox";
import RangeInputs from "../../ui/RangeInputs";
import {
  RuleRowContainer,
  Combiner,
  StyledText,
  RemoveBtn,
} from "../RulesList/RulesList.styles";

type Props = {
  index: number;
  values: RuleValues;
  removeRule(rulesetField: string, rulesetOperator: string): void;
};

const RuleRow = ({ values, index, removeRule }: Props) => {
  return (
    <RuleRowContainer>
      <StyledText>{index + 1}.</StyledText>
      <Combiner>
        {
            index > 0 &&
                <StyledText background={'primaryBlue'}>And</StyledText>
        }
      </Combiner>
      <Dropdown
        value={values.name}
        options={[]}
        variant={"rectangle"}
        readOnly
      />
      <Dropdown
        value={values.operator}
        options={[]}
        variant={"rounded"}
        readOnly
      />
      {
        values.fieldType !== 'number_range' ? 
          <InputBox value={values.value} inputType={"string"} readOnly />
        : <RangeInputs values={values.value} readOnly />

      }
      <RemoveBtn onClick={()=>removeRule(values.name!, values.operator!)} />
    </RuleRowContainer>
  );
};

export default RuleRow;
