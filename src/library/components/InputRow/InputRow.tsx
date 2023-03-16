import Button from "../../ui/Button"
import Dropdown from "../../ui/Dropdown"
import { InputRowWrapper } from "./InputRow.styles"

type Props = {}

const dummyKeys = [
  {
    text: "Number of nights",
  },
  {
    text: "Product ID",
  },
  {
    text: "Destination",
  },
  {
    text: "Tags",
  },
  {
    text: "Lead price",
  },
  {
    text: "Category",
  },
  {
    text: "Activities",
  },
];

const dummyOperators = [
  {
    text: "Is Equal to",
  },
  {
    text: "Is not equal to",
  },
  {
    text: "Is greater than",
  },
  {
    text: "Is not greater than",
  },
  {
    text: "Contains",
  },
  {
    text: "Does not contain",
  }
];

const InputRow = (props: Props) => {
  return (
    <InputRowWrapper>
      <Dropdown
        options={dummyKeys}
        variant={"rectangle"}
        onSelect={(val:string) => console.log(val)}
      />
      <Dropdown
        options={dummyOperators}
        variant={"rounded"}
        onSelect={(val:string) => console.log(val)}
      />
      <Button onClick={() => console.log("click")} text="+ Add rule" />
    </InputRowWrapper>
  );
}

export default InputRow