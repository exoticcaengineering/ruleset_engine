import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import spinner from "../../../assets/spinner.svg";
import { StyledLoader, TableWrapper, TableHeader, Column, ResultsContainer, } from "./TableStyles";
const Table = ({ query }) => {
    return (_jsxs(TableWrapper, { children: [_jsxs(TableHeader, { children: [_jsx(Column, Object.assign({ minWidth: "200px" }, { children: "No. products: 1500" })), _jsx(Column, { children: "ID" }), _jsx(Column, { children: "Market" }), _jsx(Column, Object.assign({ minWidth: "300px" }, { children: "Name" })), _jsx(Column, { children: "Destination" })] }), _jsx(ResultsContainer, { children: _jsx(StyledLoader, { src: spinner, alt: "spinner" }) })] }));
};
export default Table;
