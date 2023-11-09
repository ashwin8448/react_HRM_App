import {ReactNode, RefObject} from "react";

export default interface ICustomDropdown {
  handleAddToSelectedSkills: (currentSkill: string) => void;
  handleSkillsToDisplay: (filteredSkills: string[]) => void;
  selectedSkills: string[];
  skillsToDisplay: string[];
  children: ReactNode;
  placeholder: string;
  inputTag: RefObject<HTMLInputElement>;
}
