import Pagination from "../components/Pagination/Pagination";
import Table from "../components/Table/Table";
import TableOptions from "../components/TableOptions/TableOptions";

const EmployeeListingPage = () => {
  return (
    <>
      <TableOptions />
      <Table />
      <Pagination />
    </>
  );
};

export default EmployeeListingPage;
