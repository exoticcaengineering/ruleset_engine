/// <reference types="react" />
type Props = {
    options: string[];
    onSelect?: (val: string) => void;
    variant: DropdownType;
    value: string | null;
    disabled?: boolean;
    readOnly?: boolean;
};
declare const Dropdown: ({ options, onSelect, variant, value, disabled, readOnly, }: Props) => JSX.Element;
export default Dropdown;
