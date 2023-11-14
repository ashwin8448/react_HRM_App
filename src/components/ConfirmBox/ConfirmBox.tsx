import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import ConfirmBoxWrapper from "./styles";

const ConfirmBox = () => {
  return (
    <Modal>
      <ConfirmBoxWrapper>
        <h2>Delete Employee Details</h2>
        <p>
          Do you really want to delete details of
          <span className="negative">"Employee Name"</span>?
        </p>
        <div className="flex confirm-box-buttons">
          <Button buttonType="secondary-button" isNegative={true}>
            <span>Yes</span>
          </Button>
          <Button buttonType="secondary-button">
            <span>No</span>
          </Button>
        </div>
      </ConfirmBoxWrapper>
    </Modal>
  );
};

export default ConfirmBox;
