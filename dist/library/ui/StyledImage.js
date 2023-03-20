import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export const Img = styled.img `
    position: relative;
`;
const StyledImage = ({ imgSrc, altText, customCSS }) => {
    return _jsx(Img, { src: imgSrc, alt: altText, style: customCSS });
};
export default StyledImage;
