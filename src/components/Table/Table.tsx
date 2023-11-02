import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./Table.style";
import { useNavigate } from "react-router-dom";

interface rowProps {
  id: string;
  employeeName: string;
  department: string;
  role: string;
}

const data: rowProps[] = [
  {
    id: "1000",
    employeeName: "Raj",
    department: "FEED",
    role: "Intern",
  },
  {
    id: "1002",
    employeeName: "Rahul",
    department: "Backend",
    role: "Intern",
  },
  {
    id: "1003",
    employeeName: "Sam",
    department: "BDG",
    role: "Intern",
  },
];

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

const EmployeeRow = ({ id, employeeName, department, role }: rowProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{employeeName}</td>
      <td>{department}</td>
      <td>{role}</td>
      <td className="flex">
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
      </td>
    </tr>
  );
};

const Table = () => {
  const tableHeaders = ["Employee Number", "Name", "Department", "Role"];
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
    <TableWrapper className="container">
      <table onClick={handleTableClick}>
        <thead>
          <tr>
            {tableHeaders.map((element) => {
              return (
                <TableHeader
                  key={element}
                  tableHeader={element}
                  isSortable={true}
                ></TableHeader>
              );
            })}
            <TableHeader tableHeader="Actions" isSortable={false}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <EmployeeRow
              key={element.id}
              id={element.id}
              employeeName={element.employeeName}
              department={element.department}
              role={element.role}
            />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
