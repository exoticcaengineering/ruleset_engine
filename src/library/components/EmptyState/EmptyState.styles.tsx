import styled from 'styled-components';

export const EmptyStateWrapper = styled.div`
    width: 100%;
    height 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: ${({ theme }) => theme.colors.primaryBlue};
        font-weight: 300;
        font-size: 14px;
    }
`;