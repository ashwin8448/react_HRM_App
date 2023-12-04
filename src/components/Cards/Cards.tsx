import { useEffect } from "react";
import { useEmployeeContext } from "../../core/store/AppContext";
import { filterArray } from "../../utils/filterArray";
import { IEmployee } from "../Table/types";
import CardWrapper from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import viewIcon from "../../assets/images/view_user_icon.svg";
import editIcon from "../../assets/images/edit_icon.svg";
import deleteIcon from "../../assets/images/delete_icon.svg";
import { tableHeaders } from "../../core/config/constants";

const EmployeeCard = ({
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
    <div className="card">
      {tableHeaders.map((tableHeader) => {
        return (
          <span key={tableHeader.id}>
            {tableHeader.headerName}:{" "}
            {employee[tableHeader.id as keyof IEmployee]}
          </span>
        );
      })}
    </div>
  );
};

const EmployeeCards = ({
  updateIdToDelete,
}: {
  updateIdToDelete: (id: number) => void;
}) => {
  const { state, fetchEmployeesData } = useEmployeeContext();
  useEffect(() => {
    if (!state.employeesData.length) {
      fetchEmployeesData();
    }
  }, []);
  const filteredEmployees = filterArray(state.employeesData, state.filters);
  return (
    <CardWrapper>
      {filteredEmployees.length ? (
        filteredEmployees.map((employee: IEmployee) => (
          <EmployeeCard
            employee={employee}
            key={employee.id}
            updateIdToDelete={updateIdToDelete}
          />
        ))
      ) : (
        <span>No data available</span>
      )}
    </CardWrapper>
  );
};

export default EmployeeCards;
