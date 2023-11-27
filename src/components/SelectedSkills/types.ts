import { ISkill } from "../../pages/FormPage/types";

export default interface ISelectedSkills{
    description?: string;
    isView?: boolean;
    selectedSkills?: ISkill[];
    handleDeleteFromSelectedSkills?: (currentSkill: ISkill) => void;
  }