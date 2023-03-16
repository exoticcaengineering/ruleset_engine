/// <reference types="react" />
type Props = {
    text: string;
    onClick: () => void;
};
declare const Button: ({ text, onClick }: Props) => JSX.Element;
export default Button;
