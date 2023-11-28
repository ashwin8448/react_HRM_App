import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./styles";
import { useNavigate } from "react-router-dom";
import { tableHeaders } from "../../core/config/constants";
import { IEmployee, ITableHeader } from "./types";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { filterArray } from "../../utils/filterArray";
import { CircularProgress } from "@mui/material";

const TableHeader = ({ tableHeader }: ITableHeader) => {
  const { searchParams, updateSearchParams } = useEmployeeContext();
  return (
    <th>
      {tableHeader.isSortable ? (
        <Button
          onClick={() => {
            updateSearchParams({
              sortBy: tableHeader.id,
              sortDir:
                searchParams!.get("sortBy") === tableHeader.id
                  ? searchParams!.get("sortDir") === "desc"
                    ? "asc"
                    : "desc"
                  : "asc",
            });
          }}
          buttonType="primary-button" title="Click to sort"
        >
          <span>{tableHeader?.headerName}</span>
          {tableHeader.id === searchParams.get("sortBy") ? (
            searchParams.get("sortDir") === "asc" ? (
              <img src={sortIcon} alt="Sort icon" className="icon" />
            ) : (
              <img src={sortIcon} alt="Sort icon" className="icon invert" />
            )
          ) : null}
        </Button>
      ) : (
        <span>{tableHeader?.headerName}</span>
      )}
    </th>
  );
};

const EmployeeRow = ({ employee,updateIdToDelete }: {employee:any, updateIdToDelete:(id:number)=>void}) => {
  const navigate = useNavigate();
  employee = {
    ...employee,
    actions: (
      <div className="flex employee-actions">
        <Button
          buttonType="primary-button"
          onClick={() => navigate(`view_employee_page/${employee.id}`)} title="Click to edit employee details"
        >
          <img src={viewIcon} alt="View employee button" className="icon" />
        </Button>

        <Button
          buttonType="primary-button"
          onClick={() => navigate(`form_page/${employee.id}`)} title="Click to view employee details"
        >
          <img src={editIcon} alt="Edit employee button" className="icon" />
        </Button>

        <Button
          buttonType="primary-button"
          onClick={() => updateIdToDelete(employee.id)} title="Click to delete employee details"
        >
          <img src={deleteIcon} alt="Delete employee button" className="icon" />
        </Button>
      </div>
    ),
  };

  return (
    <tr>
      {tableHeaders.map((tableHeader) => {
        return <td key={tableHeader.id}>{employee[tableHeader.id]}</td>;
      })}
    </tr>
  );
};

const Table = ({
  updateIdToDelete,
}: {
  updateIdToDelete: (id: number) => void;
}) => {
  const { filters, employeesData, loading } = useEmployeeContext();
  const filteredEmployees = filterArray(employeesData, filters);
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader) => {
              return (
                <TableHeader
                  key={tableHeader.id}
                  tableHeader={tableHeader}
                ></TableHeader>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading.isTableLoading ? (
            <tr>
              <td className="table-no-data" colSpan={tableHeaders.length + 1}>
                <CircularProgress />
              </td>
            </tr>
          ) : filteredEmployees.length ? (
            filteredEmployees.map((employee: IEmployee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                updateIdToDelete={updateIdToDelete}
              />
            ))
          ) : (
            <tr>
              <td className="table-no-data" colSpan={tableHeaders.length + 1}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
