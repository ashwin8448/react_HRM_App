export default interface ISelectedSkills{
    description?: string;
    isView?: boolean;
    selectedSkills?: string[];
    handleDeleteFromSelectedSkills?: (currentSkill: string) => void;
  }