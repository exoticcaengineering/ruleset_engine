import React from 'react'
import styled from 'styled-components'

type Props = {
    text: string;
    disabled?: boolean;
    onClick: () => void
}

const StyledButton = styled.button<{ disabled: boolean }>`
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

const Button = ({text, onClick, disabled = false}: Props) => {
  return (
   <StyledButton type='submit' onClick={onClick} disabled={disabled}>
    {text}
   </StyledButton>
  )
}

export default Button