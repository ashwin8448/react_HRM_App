import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";

const EmployeeListing = () => {
  const { idToDelete } = useEmployeeContext();
  return (
    <>
      <TableOptions />
      <Table />
      <Pagination />
      {idToDelete ? <ConfirmBox /> : null}
    </>
  );
};

export default EmployeeListing;
