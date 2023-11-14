import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import SearchBar from "../SearchBar/SearchBar";
import TableOptionsWapper from "./styles";
import { useNavigate } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";

const TableOptions = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/form_page");
  };

  return (
    <TableOptionsWapper>
      <div className="table-options flex">
        <Button
          buttonType="primary-button"
          onClick={handleBtnClick}
          description="Add new employee"
          src={addEmployeeIcon}
          alt="Add employee icon"
        />
        <SearchBar
          placeholder="Filter by skills"
          src={clearFilterIcon}
          alt="Filter icon"
        />
      </div>
      <SelectedSkills description="Applied filter(s)" isView={false}></SelectedSkills>
    </TableOptionsWapper>
  );
};

export default TableOptions;
