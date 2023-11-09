import ChipWrapper from "./styles";
import closeButton from "../../assets/images/close_button_icon.svg";
import Button from "../Button/Button";

const SkillChip = ({
  skill,
  isView,
  handleDeleteFromSelectedSkills,
}: {
  skill?: string;
  isView?: boolean;
  handleDeleteFromSelectedSkills?: (currentSkill: string) => void;
}) => {
  return (
    <ChipWrapper className="flex">
      <span>{skill}</span>
      {!isView && (
        <Button onClick={() => handleDeleteFromSelectedSkills!(skill!)}>
          <img src={closeButton} alt="Close icon" className="icon" />
        </Button>
      )}
    </ChipWrapper>
  );
};

export default SkillChip;
