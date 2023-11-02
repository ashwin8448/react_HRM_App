import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import SearchBar from "../SearchBar/SearchBar";
import TableOptionsWapper from "./TableOptions.style";
import { useNavigate } from "react-router-dom";

const TableOptions = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/form_page");
  };

  return (
    <TableOptionsWapper className="flex container">
      <Button
        onClick={handleBtnClick}
        description="Add new employee"
        src={addEmployeeIcon}
        alt="Add employee icon"
      />
      <div>
        <SearchBar
          placeholder="Filter by skills"
          src={clearFilterIcon}
          alt="Filter icon"
        />
      </div>
    </TableOptionsWapper>
  );
};

export default TableOptions;
