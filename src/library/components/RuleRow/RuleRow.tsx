import Dropdown from "../../ui/Dropdown";
import InputBox from "../../ui/InputBox";
import {
  RuleRowContainer,
  Combiner,
  StyledText,
  RemoveBtn,
} from "../RulesList/RulesList.styles";

type Props = {
  index: number;
  values: RuleValues;
  removeRule(key: string): void;
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
      <InputBox value={values.value} inputType={"text"} readOnly />
      <RemoveBtn onClick={()=>removeRule(values.name!)} />
    </RuleRowContainer>
  );
};

export default RuleRow;
