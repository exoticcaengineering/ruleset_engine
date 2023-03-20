import styled from "styled-components";

export const RulesWrapper = styled.div<{ border: boolean }>`
  border-bottom: 1px solid ${({ theme, border }) => border ? theme.colors.greyMid : 'transparent'};

  .existingRules {
    box-sizing: border-box;
    padding: 10px 0;
  }
`;

export const RuleRowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  margin: 10px 0;

  h3 {
    font-size: 14px;
    width: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

export const Combiner = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
`;

export const StyledText = styled.h5<{ background?: string }>`
  width: 40px;
  border-radius: 2px;
  padding: 3px 0;
  text-align: center;
  background-color: ${({ theme, background }) => background ? theme.colors[background] : 'none'};
  color:  ${({ theme, background }) => background ? 'white' : theme.colors.primaryBlue};
`;

export const RemoveBtn = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  position: relative;
  cursor: pointer;

  &:after{
    content: '';
    position: absolute;
    height: 2px;
    width: 12px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;