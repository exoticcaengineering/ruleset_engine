import spinner from "../../../assets/spinner.svg";
import { StyledLoader, TableWrapper } from "./TableStyles";

type Props = {
  query?: {}[];
};

const Table = ({ query }: Props) => {
  return (
    <TableWrapper>
      <StyledLoader src={spinner} alt={"spinner"} />
    </TableWrapper>
  );
};

export default Table;
