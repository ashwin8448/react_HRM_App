import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import TableOptionsWrapper from "./styles";
import { useNavigate } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";
import { useState, useRef, useEffect } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { ISkill } from "../../pages/FormPage/types";

const TableOptions = ({ icon }: { icon: string }) => {
  const { filters, updateFilters, skills } = useEmployeeContext();
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<ISkill[]>(
    filters.skills || []
  );
  const [skillsToDisplay, setSkillsToDisplay] = useState<ISkill[]>(
    skills.filter(
      (skill) => !JSON.stringify(selectedSkills).includes(JSON.stringify(skill))
    )
  );
  const inputTag = useRef<HTMLInputElement>(null);

  const handleAddToSelectedSkills = (currentSkill: ISkill) => {
    setSkillsToDisplay(
      skillsToDisplay.filter((skill) => skill !== currentSkill)
    );
    setSelectedSkills((prev) => {
      return [...prev, currentSkill];
    });
    updateFilters({ skills: [...selectedSkills, currentSkill] });
  };

  const handleDeleteFromSelectedSkills = (skillToDelete: ISkill) => {
    setSkillsToDisplay((prev) => [...prev, skillToDelete]);
    const currentlySelectedSkills = selectedSkills.filter(
      (skill) => skill != skillToDelete
    );
    setSelectedSkills(currentlySelectedSkills);
    updateFilters({ skills: currentlySelectedSkills });
  };

  const handleSkillsToDisplay = (filteredSkills: ISkill[]) => {
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
  return (
    <TableOptionsWrapper>
      <div className="table-options flex">
        <Button
          buttonType="primary-button"
          onClick={() => {
            navigate("/form_page");
          }}
          title="Click to add employee details"
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
          <Button onClick={handleClearFilter} title="Click to clear filters">
            <img src={icon} alt="Clear filter icon" className="icon" />
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
