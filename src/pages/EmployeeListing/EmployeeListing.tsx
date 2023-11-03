import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";

const EmployeeListing = () => {
  return (
    <>
      <TableOptions />
      <Table />
      <Pagination />
      {/* <ConfirmBox /> */}
    </>
  );
};

export default EmployeeListing;
