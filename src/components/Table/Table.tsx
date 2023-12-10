import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { tableHeaders } from "../../core/config/constants";
import { IEmployee, ITableHeader } from "./types";
import { filterArray } from "../../utils/filterArray";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TableHeader = ({ tableHeader }: ITableHeader) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    sortBy: "id",
    sortDir: "asc",
  });
  const updateSearchParams = (params: {
    page?: string;
    sortBy?: string;
    sortDir?: string;
  }) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      ...params,
    });
  };
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
          buttonType="primary-button"
          title="Click to sort"
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

const EmployeeRow = ({
  employee,
  updateIdToDelete,
}: {
  employee: IEmployee;
  updateIdToDelete: (id: number) => void;
}) => {
  const navigate = useNavigate();
  employee = {
    ...employee,
    actions: (
      <div className="flex employee-actions">
        <Button
          buttonType="primary-button"
          onClick={() => navigate(`view_employee_page/${employee.id}`)}
          title="Click to edit employee details"
        >
          <img src={viewIcon} alt="View employee button" className="icon" />
        </Button>

        <Button
          buttonType="primary-button"
          onClick={() => navigate(`form_page/${employee.id}`)}
          title="Click to view employee details"
        >
          <img src={editIcon} alt="Edit employee button" className="icon" />
        </Button>

        <Button
          buttonType="primary-button"
          onClick={() => updateIdToDelete(employee.id!)}
          title="Click to delete employee details"
        >
          <img src={deleteIcon} alt="Delete employee button" className="icon" />
        </Button>
      </div>
    ),
  };

  return (
    <tr>
      {tableHeaders.map((tableHeader) => {
        return (
          <td key={tableHeader.id}>
            {employee[tableHeader.id as keyof IEmployee]}
          </td>
        );
      })}
    </tr>
  );
};

const Table = ({
  updateIdToDelete,
}: {
  updateIdToDelete: (id: number) => void;
}) => {
  // const { state, fetchEmployeesData } = useEmployeeContext();
  const employeesData = useSelector((state: any) => state.employees);
  // useEffect(() => {
  //   if (!state.employeesData.length) {
  //     fetchEmployeesData();
  //   }
  // }, []);

  // const filteredEmployees = filterArray(state.employeesData, state.filters);
  const filteredEmployees = employeesData;
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
          {employeesData.data.data.loading.isTableLoading ? (
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
