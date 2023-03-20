import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  * {
    font-family: 'Roboto';
    font-size: 14px;
  }
`;

export const StyledLoader = styled.img`
  height: 80px;
  width: 80px;
  position: relative;
  top: 10px;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greyLight};
  color: ${({ theme }) => theme.colors.primaryBlue};
`;

export const Column = styled.div<{ minWidth?: string }>`
  box-sizing: border-box;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "100px")};
`;

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;