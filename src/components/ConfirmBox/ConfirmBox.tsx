import { toast } from "react-toastify";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { deleteData } from "../../core/api";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import ConfirmBoxWrapper from "./styles";

const ConfirmBox = ({updateIdToDelete, idToDelete}:{updateIdToDelete:(id:number)=>void, idToDelete:number}) => {
  const { employeesData, fetchEmployeesData } =
    useEmployeeContext();
  const deleteHandler = async () => {
    const toastDel = toast.info(`Deleting employee details...`, {
      position: "top-center",
      hideProgressBar: false,
      progress: undefined,
      theme: "colored",
    });
    let response;
    try {
      response = await deleteData(`/employee/${idToDelete}`);
    } catch {
      toast.update(toastDel, {
        render: "Employee details could not be deleted.",
        type: toast.TYPE.ERROR,
      });
    } finally {
      fetchEmployeesData();
      updateIdToDelete(0);
      if (response?.request.status === 200) {
        toast.update(toastDel, {
          render: "Employee details deleted successfully.",
          type: toast.TYPE.SUCCESS,
        });
      }
    }
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
