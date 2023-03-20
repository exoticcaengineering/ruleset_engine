/// <reference types="react" />
type Props = {
    inputType: "number" | "text";
    onChange?: (val: string) => void;
    value: string | null;
    readOnly?: boolean;
};
declare const InputBox: ({ inputType, onChange, value, readOnly }: Props) => JSX.Element;
export default InputBox;
