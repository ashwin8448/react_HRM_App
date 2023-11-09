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
          <Button className="primary-button negative">
            <span>Yes</span>
          </Button>
          <Button className="primary-button">
            <span>No</span>
          </Button>
        </div>
      </ConfirmBoxWrapper>
    </Modal>
  );
};

export default ConfirmBox;
