import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import SearchBar from "../SearchBar/SearchBar";

const TableOptions = () => {
  return (
    <div>
      <Button description="Add new employee" src={addEmployeeIcon} />
      <div>
        Filter employee
        <SearchBar
          placeholder="Filter by skills"
          src={clearFilterIcon}
          alt="Filter icon"
        />
      </div>
    </div>
  );
};

export default TableOptions;
