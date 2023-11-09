import SkillChip from "../SkillChip/SkillChip";
import SelectedSkillsWrapper from "./styles";

const SelectedSkills = ({
  description,
  isView,
  selectedSkills,
  handleDeleteFromSelectedSkills,
}: {
  description?: string;
  isView?: boolean;
  selectedSkills?: string[];
  handleDeleteFromSelectedSkills?: (currentSkill: string) => void;
}) => {
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
