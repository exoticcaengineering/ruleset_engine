import { useState } from "react";
import styled from "styled-components";
import chevron from "../../assets/chevron.svg";
import StyledImage from "./StyledImage";

type Props = {
  options: { text: string }[];
  onSelect: (val: string) => void;
  variant: DropdownType;
};

const DropdownWrapper = styled.div<{ rounded: boolean }>`
  font-family: "Roboto";
  height: 35px;
  width: 190px;
  border: 1px solid
    ${({ theme, rounded }) =>
      !rounded ? theme.colors.blueLight : theme.colors.greyMid};
  cursor: pointer;
  position: relative;
  border-radius: ${({ rounded }) => (rounded ? "10px" : "3px")};
  background-color: ${({ rounded, theme }) =>
    rounded ? `${theme.colors.greyMid}` : "white"};
`;
const InputValue = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: 700;
`;

const CurrentValueText = styled.p`
  font-size: 14px;
`;

const OptionsContainer = styled.div<{ open: boolean; grey: boolean }>`
  width: 190px;
  transition: all 0.3s ease-in-out;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.blueLight};
  max-height: ${({ open }) => (open ? "250px" : "0px")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  position: absolute;
  top: 40px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 2px 5px;
  border-radius: 3px;
  background-color: ${({ grey, theme }) =>
    grey ? `${theme.colors.greyMid}` : "white"};
`;

const Gap = styled.div`
  height: 5px;
  width: 100%;
  top: 35px;
`;

const Option = styled(InputValue)<{ borderBottom: boolean, grey: boolean }>`
  height: 35px;
  width: 100%;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  margin: 2px 0;
  position: relative;

  &:hover {
    background-color: ${({ theme, grey }) => !grey ? theme.colors.greyLight : theme.colors.greyDark};
  }

  ${({ borderBottom, theme, grey }) =>
    borderBottom &&
    `
        margin-bottom: 5px;
        
          &:after{
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: ${!grey ? theme.colors.greyMid : theme.colors.greyDark};
          }
        `}
`;

const Dropdown = ({ options, onSelect, variant }: Props) => {
  const [currentValue, setCurrentValue] = useState<string>("Select");
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const rounded = variant === "rounded";

  const handleSelect = (val: string) => {
    toggleOpen(false);
    setCurrentValue(val);
    onSelect(val);
  };
  return (
    <DropdownWrapper
      rounded={rounded}
      onMouseLeave={() => toggleOpen(false)}
    >
      <InputValue onClick={() => toggleOpen(!isOpen)}>
        <CurrentValueText>{currentValue}</CurrentValueText>
        <StyledImage
          imgSrc={chevron}
          altText={"chevron"}
          customCSS={{
            height: "15px",
            width: "15px",
            transform: "rotate(90deg)",
          }}
        />
      </InputValue>
      <Gap />
      <OptionsContainer open={isOpen} grey={rounded}>
        {options.map((option, idx) => (
          <Option
            onClick={() => handleSelect(option.text)}
            borderBottom={idx < options.length - 1}
            grey={rounded}
          >
            {option.text}
          </Option>
        ))}
      </OptionsContainer>
    </DropdownWrapper>
  );
};

export default Dropdown;
