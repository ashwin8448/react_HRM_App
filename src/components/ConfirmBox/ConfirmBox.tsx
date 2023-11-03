import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import ConfirmBoxWrapper from "./ConfirmBox.style";

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
          <Button description="Yes" className="negative" />
          <Button description="No" />
        </div>
      </ConfirmBoxWrapper>
    </Modal>
  );
};

export default ConfirmBox;
