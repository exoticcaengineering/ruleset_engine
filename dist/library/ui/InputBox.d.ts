/// <reference types="react" />
type Props = {
    inputType: FieldType;
    onChange?: (val: string) => void;
    value: string;
    readOnly?: boolean;
};
declare const InputBox: ({ inputType, onChange, value, readOnly }: Props) => JSX.Element;
export default InputBox;
