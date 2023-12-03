import { toast } from "react-toastify";
import { useEmployeeContext } from "../../core/store/AppContext";
import { deleteData } from "../../core/api";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ConfirmBoxWrapper from "./styles";

const ConfirmBox = ({
  updateIdToDelete,
  idToDelete,
}: {
  updateIdToDelete: (id: number) => void;
  idToDelete: number;
}) => {
  const { state, fetchEmployeesData } = useEmployeeContext();
  const deleteHandler = async () => {
    const toastDel = toast.info(`Deleting employee details...`, {
      autoClose: false,
      progress: undefined,
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
          autoClose: 5000,
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
            {state.employeesData
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
            title="Click to delete employeee"
          >
            <span>Yes</span>
          </Button>
          <Button
            buttonType="secondary-button"
            onClick={() => updateIdToDelete(0)}
            title="Click to cancel"
          >
            <span>No</span>
          </Button>
        </div>
      </ConfirmBoxWrapper>
    </Modal>
  );
};

export default ConfirmBox;
