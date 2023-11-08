import { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
// import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";

const EmployeeListing = () => {
  const [selectedSkills, setSelectedSkills]=useState([]);


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
