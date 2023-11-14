import ChipWrapper from "./styles";
import closeButton from "../../assets/images/close_button_icon.svg";
import Button from "../Button/Button";
import ISkillChip from "./types";

const SkillChip = ({
  skill,
  isView,
  handleDeleteFromSelectedSkills,
}: ISkillChip) => {
  return (
    <ChipWrapper>
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
