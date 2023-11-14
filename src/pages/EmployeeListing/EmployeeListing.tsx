// import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
// import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";

const EmployeeListing = () => {
  // const [{ rowsPerPage, totalPages }, setTotalPages] = useState({
  //   rowsPerPage: 2,
  //   totalPages: 0,
  // });
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
