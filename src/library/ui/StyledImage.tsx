import styled from 'styled-components';


export const Img = styled.img`
    position: relative;
`;

interface Props {
  imgSrc: string;
  altText: string;
  customCSS?: { [key: string]: string };
}

const StyledImage = ({ imgSrc, altText, customCSS}: Props) => {
    return <Img src={imgSrc} alt={altText} style={customCSS} />;
}

export default StyledImage;