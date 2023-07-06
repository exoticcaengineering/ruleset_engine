/// <reference types="react" />
type Props = {
    text: string;
    disabled?: boolean;
    onClick: (e: any) => void;
};
declare const Button: ({ text, onClick, disabled }: Props) => JSX.Element;
export default Button;
