import SkillChip from "../SkillChip/SkillChip";
import SelectedSkillsWrapper from "./styles";
import ISelectedSkills from "./types";

const SelectedSkills = ({
  description,
  isView,
  selectedSkills,
  handleDeleteFromSelectedSkills,
}: ISelectedSkills) => {
  return (
    <SelectedSkillsWrapper className="flex selected-skills-container">
      <span className="">{description}:</span>
      <div className="flex selected-skills">
        {selectedSkills!.map((skill) => (
          <SkillChip
            key={skill}
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
