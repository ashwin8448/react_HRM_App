import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import EmployeeCards from "../../components/Cards/Cards";
import TableOptions from "../../components/TableOptions/TableOptions";
import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import { useEffect, useState } from "react";

const EmployeeListing = () => {
  const [idToDelete, setIdToDelete] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 475);
  useEffect(() => {
    const handleWidthChange = () => {
      setIsMobile(window.innerWidth < 475);
    };

    window.addEventListener("resize", handleWidthChange);
    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);
  const updateIdToDelete = (id: number) => {
    setIdToDelete(id);
  };
  return (
    <>
      <TableOptions icon={clearFilterIcon} />
      {isMobile ? (
        <EmployeeCards updateIdToDelete={updateIdToDelete} />
      ) : (
        <Table updateIdToDelete={updateIdToDelete} />
      )}
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
