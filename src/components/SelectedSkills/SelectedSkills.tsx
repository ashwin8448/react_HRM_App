import { useEffect } from "react";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import SkillChip from "../SkillChip/SkillChip";
import SelectedSkillsWrapper from "./styles";
import ISelectedSkills from "./types";
import { render } from "react-dom";

const SelectedSkills = ({
  description,
  isView,
  selectedSkills,
  handleDeleteFromSelectedSkills,
}: ISelectedSkills) => {
  const { filters } = useEmployeeContext();
  useEffect(() => {
    render();
  }, [filters]);
  return (
    <SelectedSkillsWrapper>
      <span className="">{description}:</span>
      <div className="flex selected-skills">
        {selectedSkills!.map((skill) => (
          <SkillChip
            key={skill.id}
            skill={skill}
            isView={isView}
            handleDeleteFromSelectedSkills={handleDeleteFromSelectedSkills}
          />
        ))}
      </div>
    </SelectedSkillsWrapper>
  );
};

export default SelectedSkills;
