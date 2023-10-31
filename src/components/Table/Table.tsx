import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";

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

const EmployeeRow = ({ id, employeeName, department, role }: rowProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{employeeName}</td>
      <td>{department}</td>
      <td>{role}</td>
      <td>
        <Button src={viewIcon} alt="View employee button"></Button>
        <Button src={editIcon} alt="Edit employee button"></Button>
        <Button src={deleteIcon} alt="Delete employee button"></Button>
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee Number</th>
          <th>Name</th>
          <th>Department</th>
          <th>Role</th>
          <th>Actions</th>
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
  );
};

export default Table;
