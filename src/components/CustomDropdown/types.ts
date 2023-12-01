import { ReactNode, RefObject } from "react";
import { ISkill } from "../../pages/FormPage/types";

export interface ICustomDropdown {
  handleAddToSelectedSkills: (currentSkill: ISkill) => void;
  handleSkillsToDisplay: (filteredSkills: ISkill[]) => void;
  selectedSkills: ISkill[];
  skillsToDisplay: ISkill[];
  children: ReactNode;
  placeholder: string;
  inputTag: RefObject<HTMLInputElement>;
  dropdownLocation: string;
}

export interface ICustomDropdownStyleProps {
  $dropdownLocation?: string;
}
