import { ReactNode, RefObject } from "react";

export interface ICustomDropdown {
  handleAddToSelectedSkills: (currentSkill: string) => void;
  handleSkillsToDisplay: (filteredSkills: string[]) => void;
  selectedSkills: string[];
  skillsToDisplay: string[];
  children: ReactNode;
  placeholder: string;
  inputTag: RefObject<HTMLInputElement>;
  dropdownLocation: string;
}

export interface ICustomDropdownStyleProps {
  $dropdownLocation?: string;
}
