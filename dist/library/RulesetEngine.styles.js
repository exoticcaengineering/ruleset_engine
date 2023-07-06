import styled from 'styled-components';
export const RulesetWrapper = styled.div `
    width: 100%;
    min-height: 20px;
    box-sizing: border-box;
    padding: 0 20px 20px;
    border-radius: 10px;
    font-family: Roboto;
    background-color: white;

    h4{
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.greyMid};
        margin: 0;
        font-size: 16px;
        line-height: 60px;
        font-family: Roboto;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.primaryBlue};
    }
`;
