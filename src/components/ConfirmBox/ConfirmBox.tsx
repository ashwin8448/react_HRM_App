import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { deleteData } from "../../core/api";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import ConfirmBoxWrapper from "./styles";

const ConfirmBox = () => {
  const { updateIdToDelete, idToDelete, employeesData, updateEmployeesData } =
    useEmployeeContext();
  const deleteHandler = () => {
    deleteData(`/employee/${idToDelete}`);
    // const updatedEmployees = employeesData.filter(
    //   (employee) => employee.id != idToDelete
    // );
    // updateEmployeesData(updatedEmployees);
    updateIdToDelete(0);
  };
  return (
    <Modal updateIdToDelete={updateIdToDelete}>
      <ConfirmBoxWrapper>
        <h2>Delete Employee Details</h2>
        <p>
          Do you really want to delete details of&nbsp;
          <span className="negative">
            {employeesData
              .filter((employee) => employee.id === idToDelete)
              .map((employee) => employee.firstName + " " + employee.lastName)}
          </span>
          ?
        </p>
        <div className="flex confirm-box-buttons">
          <Button
            buttonType="secondary-button"
            isNegative={true}
            onClick={deleteHandler}
          >
            <span>Yes</span>
          </Button>
          <Button
            buttonType="secondary-button"
            onClick={() => updateIdToDelete(0)}
          >
            <span>No</span>
          </Button>
        </div>
      </ConfirmBoxWrapper>
    </Modal>
  );
};

export default ConfirmBox;
