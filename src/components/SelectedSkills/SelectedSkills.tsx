import SkillChip from "../SkillChip/SkillChip";
import SelectedSkillsWrapper from "./styles";

const SelectedSkills = ({
  description,
  isView,
}: {
  description: string;
  isView: boolean;
}) => {
  return (
    <SelectedSkillsWrapper>
      <span className="">{description}:</span>
      <div className="flex selected-skills">
        <SkillChip skill="HTML" isView={isView} />
        <SkillChip skill="CSS" isView={isView} />
        <SkillChip skill="Git" isView={isView} />
        <SkillChip skill="Adobe XD" isView={isView} />
        <SkillChip skill="Angular" isView={isView} />
        <SkillChip skill="React" isView={isView} />
        <SkillChip skill="Vue" isView={isView} />
        <SkillChip skill="Node" isView={isView} />
        <SkillChip skill="MongoDB" isView={isView} />
      </div>
    </SelectedSkillsWrapper>
  );
};

export default SelectedSkills;
