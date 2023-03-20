/// <reference types="react" />
type Props = {
    text: string;
    disabled?: boolean;
    onClick: () => void;
};
declare const Button: ({ text, onClick, disabled }: Props) => JSX.Element;
export default Button;
