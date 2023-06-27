import styled from "styled-components";
import spinner from "../../assets/spinner.svg";

type Props = {}

const LoadingWrapper = styled.div`
    width: 100%;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledLoader = styled.img`
  height: 80px;
  width: 80px;
  position: relative;
  top: 10px;
`;
const LoadingState = (props: Props) => {
  return (
    <LoadingWrapper>
        <StyledLoader src={spinner} alt={"spinner"} />
    </LoadingWrapper>
  )
}

export default LoadingState