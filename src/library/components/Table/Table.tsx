import spinner from "../../../assets/spinner.svg";
import {
  StyledLoader,
  TableWrapper,
  TableHeader,
  Column,
  ResultsContainer,
} from "./TableStyles";

type Props = {
  query?: {}[];
};

const Table = ({ query }: Props) => {
  return (
    <TableWrapper>
      <TableHeader>
        <Column minWidth={"200px"}>No. products: 1500</Column>
        <Column>ID</Column>
        <Column>Market</Column>
        <Column minWidth={"300px"}>Name</Column>
        <Column>Destination</Column>
      </TableHeader>
      <ResultsContainer>
        <StyledLoader src={spinner} alt={"spinner"} />
      </ResultsContainer>
    </TableWrapper>
  );
};

export default Table;
