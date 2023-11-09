export default interface ISkillChip{
    skill?: string;
    isView?: boolean;
    handleDeleteFromSelectedSkills?: (currentSkill: string) => void;
  }