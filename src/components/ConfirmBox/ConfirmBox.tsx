import Modal from "../Modal/Modal";

const ConfirmBox = () => {
  return (
    <Modal>
      <div>
        <h2>Delete Employee Details</h2>
      </div>
      <p>
        Do you really want to delete details of
        <span>"Employee Name"</span>?
      </p>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </Modal>
  );
};

export default ConfirmBox;
