import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { employees, tableHeaders } from "../../core/config/constants";
import { IEmployee, ITableHeader } from "./types";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { filterArray } from "../../utils/filterArray";
import { sortEmployees } from "../../utils/sort";
import { useContext } from "react";

const TableHeader = ({ tableHeader, isSortable }: ITableHeader) => {
  const { sortConfig, updateSortConfig } = useEmployeeContext();
  return (
    <th>
      {isSortable ? (
        <Button
          onClick={() => updateSortConfig(tableHeader.id)}
          buttonType="primary-button"
        >
          <span>{tableHeader?.headerName}</span>
          {tableHeader.id === sortConfig.sortColumn ? (
            sortConfig.sortOrder === "asc" ? (
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

const EmployeeRow = ({ employee }: any) => {
  const { updateIdToDelete } = useEmployeeContext();
  const navigate = useNavigate();

  return (
    <tr>
      {tableHeaders.map((tableHeader) => {
        return <td key={tableHeader.id}>{employee[tableHeader.id]}</td>;
      })}

      <td>
        <div className="flex employee-actions">
          <Button
            buttonType="primary-button"
            onClick={() => navigate(`view_employee_page/${employee.id}`)}
          >
            <img src={viewIcon} alt="View employee button" className="icon" />
          </Button>

          <Button
            buttonType="primary-button"
            onClick={() => navigate(`form_page/${employee.id}`)}
          >
            <img src={editIcon} alt="Edit employee button" className="icon" />
          </Button>

          <Button
            buttonType="primary-button"
            onClick={() => updateIdToDelete(employee.id)}
          >
            <img
              src={deleteIcon}
              alt="Delete employee button"
              className="icon"
            />
          </Button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  const { filters, sortConfig, employeesData } = useEmployeeContext();
  const filteredEmployees = sortEmployees(
    filterArray(employeesData, filters),
    sortConfig
  );
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
                  isSortable={true}
                ></TableHeader>
              );
            })}
            <TableHeader
              tableHeader={{ headerName: "Actions", id: "" }}
              isSortable={false}
            ></TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length ? (
            filteredEmployees.map((employee: IEmployee) => (
              <EmployeeRow
                key={employee.id}
                employee={{
                  ...employee,
                  name: `${employee.firstName} ${employee.lastName}`,
                }}
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
