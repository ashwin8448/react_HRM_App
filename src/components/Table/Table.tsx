import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import sortIcon from "../../assets/images/ascending_order_icon.svg";
import TableWrapper from "./Table.style";

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
      <span>{tableHeader}</span>
      {isSortable && <img src={sortIcon} alt="Sort icon" />}
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
        <Button src={viewIcon} alt="View employee button"></Button>
        <Button src={editIcon} alt="Edit employee button"></Button>
        <Button src={deleteIcon} alt="Delete employee button"></Button>
      </td>
    </tr>
  );
};

const Table = () => {
  const tableHeaders = ["Employee Number", "Name", "Department", "Role"];
  return (
    <TableWrapper className="container">
      <table>
        <thead>
          <tr>
            <>
              {tableHeaders.map((element) => {
                return (
                  <TableHeader
                    tableHeader={element}
                    isSortable={true}
                  ></TableHeader>
                );
              })}
              <TableHeader
                tableHeader="Actions"
                isSortable={false}
              ></TableHeader>
            </>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <EmployeeRow
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
