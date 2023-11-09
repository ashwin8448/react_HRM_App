import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
// import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";

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
