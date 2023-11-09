// import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
// import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";

const EmployeeListing = () => {
  // const [tableStateObj, setTableStateObj] = useState({
  //   sortBy: "",
  //   filterBy: [],
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
