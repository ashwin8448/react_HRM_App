import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import { useState } from "react";

const EmployeeListing = () => {
  const [idToDelete, setIdToDelete] = useState(0);
  const updateIdToDelete = (id: number) => {
    setIdToDelete(id);
  };
  return (
    <>
      <TableOptions icon={clearFilterIcon} />
      <Table updateIdToDelete={updateIdToDelete} />
      <Pagination />
      {idToDelete ? (
        <ConfirmBox
          updateIdToDelete={updateIdToDelete}
          idToDelete={idToDelete}
        />
      ) : null}
    </>
  );
};

export default EmployeeListing;
