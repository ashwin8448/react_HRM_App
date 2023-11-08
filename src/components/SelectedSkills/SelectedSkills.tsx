import SkillChip from "../SkillChip/SkillChip";
import SelectedSkillsWrapper from "./styles";

const SelectedSkills = ({
  description,
  isView,
  selectedSkills,
}: {
  description: string;
  isView: boolean;
  selectedSkills: string[];
}) => {
  return (
    <SelectedSkillsWrapper className="flex selected-skills-container">
      <span className="">{description}:</span>
      <div className="flex selected-skills">
        {selectedSkills.map((skill) => (
          <SkillChip key={skill} skill={skill} isView={isView} />
        ))}
      </div>
    </SelectedSkillsWrapper>
  );
};

export default SelectedSkills;
