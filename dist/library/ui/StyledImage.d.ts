/// <reference types="react" />
export declare const Img: import("styled-components").StyledComponent<"img", any, {}, never>;
interface Props {
    imgSrc: string;
    altText: string;
    customCSS?: {
        [key: string]: string;
    };
}
declare const StyledImage: ({ imgSrc, altText, customCSS }: Props) => JSX.Element;
export default StyledImage;
