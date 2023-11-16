import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import TableOptionsWrapper from "./styles";
import { Link } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";
import { useState, useRef } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { skills } from "../../core/config/constants";
import { useEmployeeContext } from "../../contexts/EmployeeContext";

const TableOptions = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsToDisplay, setSkillsToDisplay] = useState<string[]>(skills);
  const inputTag = useRef<HTMLInputElement>(null);
  const { updateFilters } = useEmployeeContext();

  const handleAddToSelectedSkills = (currentSkill: string) => {
    setSkillsToDisplay(
      skillsToDisplay.filter((skill) => skill !== currentSkill)
    );
    setSelectedSkills((prev) => {
      return [...prev, currentSkill];
    });
    updateFilters({ skills: [...selectedSkills, currentSkill] });
  };

  const handleDeleteFromSelectedSkills = (skillToDelete: string) => {
    setSkillsToDisplay((prev) => [...prev, skillToDelete]);
    const currentlySelectedSkills = selectedSkills.filter(
      (skill) => skill != skillToDelete
    );
    setSelectedSkills(currentlySelectedSkills);
    updateFilters({ skills: currentlySelectedSkills });
  };

  const handleSkillsToDisplay = (filteredSkills: string[]) => {
    setSkillsToDisplay(filteredSkills);
  };

  const handleClearFilter = () => {
    inputTag.current!.value = "";
    setSkillsToDisplay(skills);
    setSelectedSkills([]);
    updateFilters({ skills: [] });
  };

  return (
    <TableOptionsWrapper>
      <div className="table-options flex">
        <Link to="/form_page">
          <Button buttonType="primary-button">
            <span>Add new employee</span>
            <img
              src={addEmployeeIcon}
              alt="Add employee icon"
              className="icon"
            />
          </Button>
        </Link>
        <CustomDropdown
          dropdownLocation="homepage"
          selectedSkills={selectedSkills}
          handleAddToSelectedSkills={handleAddToSelectedSkills}
          handleSkillsToDisplay={handleSkillsToDisplay}
          skillsToDisplay={skillsToDisplay}
          placeholder="Filter by skills"
          inputTag={inputTag}
        >
          <Button onClick={handleClearFilter}>
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
