import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import TableOptionsWrapper from "./styles";
import { Link, useNavigate } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";
import { useState, useRef, useEffect } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useEmployeeContext } from "../../contexts/EmployeeContext";

const TableOptions = () => {
  const { updateFilters, skills } = useEmployeeContext();
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsToDisplay, setSkillsToDisplay] = useState<string[]>(skills);
  const inputTag = useRef<HTMLInputElement>(null);

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
  useEffect(() => {
    setSkillsToDisplay(skills);
  }, [skills]);

  return skillsToDisplay.length ? (
    <TableOptionsWrapper>
      <div className="table-options flex">
        <Button
          buttonType="primary-button"
          onClick={() => {
            navigate("/form_page");
          }}
        >
          <span>Add new employee</span>
          <img src={addEmployeeIcon} alt="Add employee icon" className="icon" />
        </Button>
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
  ) : null;
};

export default TableOptions;
