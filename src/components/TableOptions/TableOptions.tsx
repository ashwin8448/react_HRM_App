import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import TableOptionsWrapper from "./styles";
import { useNavigate } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";
import { useState } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { skills } from "../../core/config/constants";

const TableOptions = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/form_page");
  };

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsToDisplay, setSkillsToDisplay] = useState<string[]>(skills);

  const handleAddToSelectedSkills = (currentSkill: string) => {
    setSkillsToDisplay(skillsToDisplay.filter(skill => skill !== currentSkill));
    setSelectedSkills((prev) => [...prev, currentSkill]);
  };

  const handleDeleteFromSelectedSkills = (skillToDelete: string) => {
    setSkillsToDisplay((prev) => [...prev, skillToDelete]);
    setSelectedSkills(selectedSkills.filter((skill) => skill != skillToDelete));
  };

  const handleSkillsToDisplay = (filteredSkills: string[]) => {
    setSkillsToDisplay(filteredSkills);
  };

  return (
    <TableOptionsWrapper>
      <div className="table-options flex">
        <Button className="primary-button" onClick={handleBtnClick}>
          <span>Add new employee</span>
          <img src={addEmployeeIcon} alt="Add employee icon" className="icon" />
        </Button>
        <CustomDropdown
          selectedSkills={selectedSkills}
          handleAddToSelectedSkills={handleAddToSelectedSkills}
          handleSkillsToDisplay={handleSkillsToDisplay}
          skillsToDisplay={skillsToDisplay}
          placeholder="Filter by skills"
        >
          <Button>
            <img
              src={clearFilterIcon}
              alt="Clear filter icon"
              className="icon"
            />
          </Button>
        </CustomDropdown>
      </div>
      {selectedSkills.length != 0 ? (
        <SelectedSkills
          description="Applied filter(s)"
          isView={false}
          selectedSkills={selectedSkills}
          handleDeleteFromSelectedSkills={handleDeleteFromSelectedSkills}
        />
      ) : null}
    </TableOptionsWrapper>
  );
};

export default TableOptions;
