import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import spinner from "../../assets/spinner.svg";
const LoadingWrapper = styled.div `
    width: 100%;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StyledLoader = styled.img `
  height: 80px;
  width: 80px;
  position: relative;
  top: 10px;
`;
const LoadingState = (props) => {
    return (_jsx(LoadingWrapper, { children: _jsx(StyledLoader, { src: spinner, alt: "spinner" }) }));
};
export default LoadingState;
