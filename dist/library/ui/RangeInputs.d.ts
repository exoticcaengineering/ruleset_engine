/// <reference types="react" />
type Props = {
    onChange?: (val: any) => void;
    values: {
        min: number;
        max: number;
    };
    readOnly?: boolean;
};
declare const RangeInputs: ({ onChange, values, readOnly }: Props) => JSX.Element;
export default RangeInputs;
