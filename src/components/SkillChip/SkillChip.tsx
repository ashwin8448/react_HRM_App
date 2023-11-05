import ChipWrapper from "./styles";
import closeButton from "../../assets/images/close_button_icon.svg";
import Button from "../Button/Button";

const SkillChip = ({skill, isView}:{skill:string, isView:boolean}) => {
  return (
    <ChipWrapper className="flex">
      <span>{skill}</span>
      {!isView && <Button src={closeButton} alt="Close icon"></Button>}
    </ChipWrapper>
  );
};

export default SkillChip;
