import { jsx as _jsx } from "react/jsx-runtime";
import spinner from "../../../assets/spinner.svg";
import { StyledLoader, TableWrapper } from "./TableStyles";
const Table = ({ query }) => {
    return (_jsx(TableWrapper, { children: _jsx(StyledLoader, { src: spinner, alt: "spinner" }) }));
};
export default Table;
