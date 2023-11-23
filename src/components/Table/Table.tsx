import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { rowsPerPage, tableHeaders } from "../../core/config/constants";
import { IEmployee, ITableHeader } from "./types";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { filterArray } from "../../utils/filterArray";

const TableHeader = ({ tableHeader }: ITableHeader) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentPage } = useEmployeeContext();
  console.log(tableHeader.id, searchParams.get("sortBy"), searchParams.get("sortDir"))
  return (
    <th>
      {tableHeader.isSortable ? (
        <Button
          onClick={
            () =>
              setSearchParams({
                sortBy: tableHeader.id,
                sortDir: 
                      searchParams.get("sortBy") === tableHeader.id
                        ? searchParams.get("sortDir") === "desc"
                          ? "asc"
                          : "desc"
                        : "asc",
                limit: String(rowsPerPage),
                offset: String(rowsPerPage * (currentPage - 1)),
              })
            // updateSortConfig(tableHeader.id)
          }
          buttonType="primary-button"
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

const EmployeeRow = ({ employee }: any) => {
  const { updateIdToDelete } = useEmployeeContext();
  const navigate = useNavigate();
  employee = {
    ...employee,
    actions: (
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

const Table = () => {
  const { filters, employeesData } = useEmployeeContext();
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
          {filteredEmployees.length ? (
            filteredEmployees.map((employee: IEmployee) => (
              <EmployeeRow key={employee.id} employee={employee} />
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
