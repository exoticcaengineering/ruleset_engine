import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../../ui/Button';
import { EmptyStateWrapper } from './EmptyState.styles';
const EmptyState = ({ switchView }) => {
    return (_jsxs(EmptyStateWrapper, { children: [_jsx("p", { children: "Define rules for discounts to apply to products that belong to various combined filters" }), _jsx(Button, { text: '+ Add rule', onClick: switchView })] }));
};
export default EmptyState;
