import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";

const EmployeeListing = () => {
  const { idToDelete } = useEmployeeContext();
  return (
    <>
      <TableOptions icon={clearFilterIcon}/>
      <Table />
      <Pagination />
      {idToDelete ? <ConfirmBox /> : null}
    </>
  );
};

export default EmployeeListing;
