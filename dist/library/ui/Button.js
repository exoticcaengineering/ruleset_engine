import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledButton = styled.button `
    all: unset;
    cursor: pointer;
    padding: 8px;
    font-size: 13px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;
`;
const Button = ({ text, onClick }) => {
    return (_jsx(StyledButton, Object.assign({ onClick: onClick }, { children: text })));
};
export default Button;
