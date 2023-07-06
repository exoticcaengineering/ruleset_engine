import { useEffect, useState } from "react";
import styled from "styled-components";


type Props = {
    onChange?: (val: any) => void;
    values: { min: number, max: number };
    readOnly?: boolean;
  };

const RangeInputsContainer = styled.div`
  display: flex;
  font-family: "Roboto";
  width: 190px;
  margin-right: 20px;
`;

const RangeItem = styled.div<{ readOnly: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 8px;

  p {
    margin: 0 5px 0 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.blueLight};
  }
  input {
    height: 35px;
    width: 60px;
    border-radius: 3px;
    border: 1px ${({ theme }) => theme.colors.blueLight};
    border-style: ${({ readOnly }) => (readOnly ? "dashed" : "solid")};
    pointer-events: ${({ readOnly }) => (readOnly ? "none" : "all")};
  }
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}
`;

const RangeInputs = ({ onChange, values, readOnly }: Props) => {
    const [ localValues, setLocalValues ] = useState(values);

  const handleChange = (e: any, key: 'min' | 'max') => {
    setLocalValues((prev) => ({ ...prev, [key]: Number(e.target.value) }));
  };

  useEffect(() => {
    onChange && onChange(localValues);
  }, [localValues, onChange]);

  return (
    <RangeInputsContainer>
      <RangeItem readOnly={!!readOnly}>
        <p>Min</p>
        <input
          type={"number"}
          min={0}
          onInput={(e)=>handleChange(e, 'min')}
          defaultValue={localValues.min || 0}
          readOnly={!!readOnly}
        />
      </RangeItem>
      <RangeItem readOnly={!!readOnly}>
        <p>Max</p>
        <input
          type={"number"}
          min={0}
          onInput={(e)=>handleChange(e, 'max')}
          defaultValue={localValues.max || 10}
          readOnly={!!readOnly}
        />
      </RangeItem>
    </RangeInputsContainer>
  );
}

export default RangeInputs