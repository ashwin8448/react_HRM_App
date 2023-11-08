import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import SearchBar from "../SearchBar/SearchBar";
import TableOptionsWapper from "./styles";
import { useNavigate } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";
import { useState } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const TableOptions = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/form_page");
  };
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSelectedSkills = (currentSkill: string) => {
    setSelectedSkills((prev) => [...prev, currentSkill]);
  };

  return (
    <TableOptionsWapper>
      <div className="table-options flex">
        <Button
          className="primary-button"
          onClick={handleBtnClick}
          description="Add new employee"
          src={addEmployeeIcon}
          alt="Add employee icon"
        />
        <CustomDropdown handleSelectedSkills={handleSelectedSkills} />
        <SearchBar
          placeholder="Filter by skills"
          src={clearFilterIcon}
          alt="Filter icon"
          // selectedSkills={selectedSkills}
        />
      </div>
      <SelectedSkills
        description="Applied filter(s)"
        isView={false}
        selectedSkills={selectedSkills}
      ></SelectedSkills>
    </TableOptionsWapper>
  );
};

export default TableOptions;
