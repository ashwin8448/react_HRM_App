import { RefObject } from "react";

export default interface IInput {
  description: string;
  isMandatory: boolean;
  inputType: string;
  arrayName?: string;
  selectedSkills: string[];
  skillsToDisplay: string[];
  handleAddToSelectedSkills: (currentSkill: string) => void;
  handleSkillsToDisplay: (filteredSkills: string[]) => void;
  handleClearFilter: () => void;
  inputTag: RefObject<HTMLInputElement>;
}
