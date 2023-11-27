import { ISkill } from "../../pages/FormPage/types";

export default interface ISkillChip{
    skill?: ISkill;
    isView?: boolean;
    handleDeleteFromSelectedSkills?: (currentSkill: ISkill) => void;
  }