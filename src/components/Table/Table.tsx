import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./styles";
import { Link } from "react-router-dom";
import { IRowProps } from "../../core/interface/interface";
import { employees, tableHeaders } from "../../core/config/constants";

const TableHeader = ({
  tableHeader,
  isSortable,
}: {
  tableHeader?: string;
  isSortable?: boolean;
}) => {
  const sortHandler = () => {
    alert("SORTED");
  };
  return (
    <th>
      {isSortable ? (
        <Button
          description={tableHeader}
          src={sortIcon}
          alt="Sort icon"
          onClick={sortHandler}
          className="primary-button"
        ></Button>
      ) : (
        <span>{tableHeader}</span>
      )}
    </th>
  );
};

const EmployeeRow = ({ employee }: any) => {
  const deleteButtonHandler = () => {
    alert("DELETED");
  };
  return (
    <tr>
      {tableHeaders.map((tableHeader) => {
        return <td key={tableHeader.headerName}>{employee[tableHeader.id]}</td>;
      })}

      <td>
        <div className="flex employee-actions">
          <Link to="view_employee_page">
            <Button
              className="primary-button"
              src={viewIcon}
              alt="View employee button"
            ></Button>
          </Link>
          <Link to="/form_page">
            <Button
              className="primary-button"
              src={editIcon}
              alt="Edit employee button"
            ></Button>
          </Link>
          <Button
            className="primary-button"
            src={deleteIcon}
            alt="Delete employee button"
            onClick={deleteButtonHandler}
          ></Button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <TableWrapper className=" table-section">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader) => {
              return (
                <TableHeader
                  key={tableHeader.id}
                  tableHeader={tableHeader.headerName}
                  isSortable={true}
                ></TableHeader>
              );
            })}
            <TableHeader tableHeader="Actions" isSortable={false}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={{
                ...employee,
                name: `${employee.fname} ${employee.lname}`,
              }}
            />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
