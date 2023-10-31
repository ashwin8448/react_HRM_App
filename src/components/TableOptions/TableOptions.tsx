import Button from "../Button/Button";
import AddEmployeeIcon from "../../assets/images/add_user_icon.svg"

const TableOptions = () => {
  return (
    <div>
      <Button description="Add new employee" src={AddEmployeeIcon}/>
      <div>Filter employee</div>
    </div>
  );
};

export default TableOptions;
