import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./Table.style";
import { useNavigate } from "react-router-dom";
import { IRowProps } from "../../core/interface/interface";
import { employees, tableHeaders } from "../../core/config/constants";

const TableHeader = ({
  tableHeader,
  isSortable,
}: {
  tableHeader?: string;
  isSortable?: boolean;
}) => {
  return (
    <th>
      {isSortable ? (
        <Button
          description={tableHeader}
          src={sortIcon}
          alt="Sort icon"
        ></Button>
      ) : (
        <span>{tableHeader}</span>
      )}
    </th>
  );
};

const EmployeeRow = ({ employee }: any) => {
  return (
    <tr>
      {tableHeaders.map((tableHeader) => {
        return (
          <td key={tableHeader.headerName}>
            {
              tableHeader.id.reduce((currentHeaderName, headerId) => {
                return currentHeaderName + " " + employee[headerId];
              }, "")
              // employee[tableHeader.id]
            }
          </td>
        );
      })}

      <td>
        <div className="flex employee-actions">
          <Button
            src={viewIcon}
            alt="View employee button"
            action="view"
          ></Button>
          <Button
            src={editIcon}
            alt="Edit employee button"
            action="edit"
          ></Button>
          <Button
            src={deleteIcon}
            alt="Delete employee button"
            action="delete"
          ></Button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  const navigate = useNavigate();

  const handleTableClick = (e: React.MouseEvent<HTMLElement>) => {
    const targetElement = (e.target as HTMLElement).closest("button");
    if (targetElement) {
      switch (targetElement.parentElement?.tagName) {
        case "TH":
          alert("Sorted");
          break;
        case "TD":
          switch (targetElement.dataset.action) {
            case "edit":
              navigate("/form_page");
              break;
            case "view":
              navigate("/view_employee_page");
              break;
            case "delete":
              alert("Deleted");
              break;
          }
          break;
      }
    }
  };
  return (
    <TableWrapper className="container table-section">
      <table onClick={handleTableClick}>
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
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
