import Button from "../Button/Button";
import addEmployeeIcon from "../../assets/images/add_user_icon.svg";
import TableOptionsWrapper from "./styles";
import { useNavigate } from "react-router-dom";
import SelectedSkills from "../SelectedSkills/SelectedSkills";
import { useState, useRef, useEffect } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { ISkill } from "../../pages/FormPage/types";
import { updateFilters } from "../../core/store/actions";
import { useDispatch, useSelector } from "react-redux";

const TableOptions = ({ icon }: { icon: string }) => {
  const { filters, skills } = useSelector((state: any) => {
    return { skills: state.skills, filters: state.filters };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<ISkill[]>(
    filters.skills || []
  );
  const [skillsToDisplay, setSkillsToDisplay] = useState<ISkill[]>(
    skills.filter(
      (skill: ISkill) =>
        !JSON.stringify(selectedSkills).includes(JSON.stringify(skill))
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
    dispatch(updateFilters({ skills: [...selectedSkills, currentSkill] }));
  };

  const handleDeleteFromSelectedSkills = (skillToDelete: ISkill) => {
    setSkillsToDisplay((prev) => [...prev, skillToDelete]);
    const currentlySelectedSkills = selectedSkills.filter(
      (skill) => skill != skillToDelete
    );
    setSelectedSkills(currentlySelectedSkills);
    dispatch(updateFilters({ skills: currentlySelectedSkills }));
  };

  const handleSkillsToDisplay = (filteredSkills: ISkill[]) => {
    setSkillsToDisplay(filteredSkills);
  };
  const handleClearFilter = () => {
    inputTag.current!.value = "";
    setSkillsToDisplay(skills);
    setSelectedSkills([]);
    dispatch(updateFilters({ skills: [] }));
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
          styleClass="full-width"
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
