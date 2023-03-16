import { jsx as _jsx } from "react/jsx-runtime";
import Button from "../../ui/Button";
import { InputRowWrapper } from "./InputRow.styles";
const InputRow = (props) => {
    return (_jsx(InputRowWrapper, { children: _jsx(Button, { onClick: () => console.log('click'), text: "+ Add rule" }) }));
};
export default InputRow;
