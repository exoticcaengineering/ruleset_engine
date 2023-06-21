import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledButton = styled.button `
    all: unset;
    padding: 8px 14px;
    font-size: 13px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;
    opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
    mouse-events: ${({ disabled }) => disabled ? 'none' : 'all'};
    cursor: ${({ disabled }) => disabled ? 'initial' : 'pointer'};
`;
const Button = ({ text, onClick, disabled = false }) => {
    return (_jsx(StyledButton, Object.assign({ type: 'submit', onClick: onClick, disabled: disabled }, { children: text })));
};
export default Button;
