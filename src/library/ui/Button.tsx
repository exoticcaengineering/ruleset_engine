import React from 'react'
import styled from 'styled-components'

type Props = {
    text: string;
}

const StyledButton = styled.button`
    all: unset;
    cursor: pointer;
    padding: 8px;
    font-size: 13px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;
`;

const Button = ({text}: Props) => {
  return (
   <StyledButton>
    {text}
   </StyledButton>
  )
}

export default Button