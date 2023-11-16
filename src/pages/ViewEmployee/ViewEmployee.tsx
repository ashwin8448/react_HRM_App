import { useParams } from "react-router-dom";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import DivWrapper from "./styles";
import { filterArray } from "../../utils/filterArray";
import { useEmployeeContext } from "../../contexts/EmployeeContext";

const ViewEmployee = () => {
  const { employeeId } = useParams();
  const {employeesData} = useEmployeeContext();
  const [employee] = filterArray(employeesData, { id: [Number(employeeId)] });
  return (
    <DivWrapper className="page-content">
      <div>
        <h2>Employee Details</h2>
      </div>
      <p>
        Name: <span>{employee.firstName + " " + employee.lastName}</span>
      </p>
      <p>
        Date of Birth: <span>{employee.dob}</span>
      </p>
      <p>
        Address: <span>{employee.address}</span>
      </p>
      <p>
        Phone: <span>{employee.phone}</span>
      </p>
      <p>
        Email: <span>{employee.email}</span>
      </p>
      <p>
        Date of joining: <span>{employee.doj}</span>
      </p>
      <p>
        Department: <span>{employee.department}</span>
      </p>
      <p>
        Role: <span>{employee.role}</span>
      </p>
      <div>
        <SelectedSkills
          description="Skill(s)"
          isView={true}
          selectedSkills={employee.skills}
        ></SelectedSkills>
      </div>
    </DivWrapper>
  );
};

export default ViewEmployee;
