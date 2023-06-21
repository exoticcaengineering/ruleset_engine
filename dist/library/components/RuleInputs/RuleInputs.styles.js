import styled from "styled-components";
export const RuleInputsWrapper = styled.form `
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyMid};
  width: 100%;
  padding: 30px 10px;
  display: flex;
  position: relative;
  z-index: 20;
  box-sizing: border-box;
`;
