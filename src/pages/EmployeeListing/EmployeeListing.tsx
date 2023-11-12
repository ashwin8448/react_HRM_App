import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
// import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import EmployeeProvider from "../../contexts/EmployeeContext";

const EmployeeListing = () => {
  return (
    <EmployeeProvider>
      <TableOptions />
      <Table />
      <Pagination />
      {/* <ConfirmBox /> */}
    </EmployeeProvider>
  );
};

export default EmployeeListing;
