import { useState } from "react";
import { dropdownData } from "../../core/config/constants";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Dropdown from "../Dropdown/Dropdown";
import { skills } from "../../core/config/constants";
import Button from "../Button/Button";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";

const InputField = ({
  description,
  isMandatory,
  inputType,
  selectedSkills,
  skillsToDisplay,
  handleAddToSelectedSkills,
  handleSkillsToDisplay,
}: {
  description: string;
  isMandatory: boolean;
  inputType: string;
  selectedSkills: string[];
  skillsToDisplay: string[];
  handleAddToSelectedSkills: (currentSkill: string) => void;
  handleSkillsToDisplay: (filteredSkills: string[]) => void;
}) => {
  return (
    <label className="flex flex-column">
      <div>
        {isMandatory && <span className="asterisk">*</span>}
        <span> {description}:</span>
      </div>
      {inputType?.split(":")[0] == "custom" ? (
        inputType?.split(":")[1] == "skill" ? (
          <CustomDropdown
            selectedSkills={selectedSkills}
            handleAddToSelectedSkills={handleAddToSelectedSkills}
            handleSkillsToDisplay={handleSkillsToDisplay}
            skillsToDisplay={skillsToDisplay}
            placeholder="Filter by skills"
          >
            <Button>
              <img
                src={clearFilterIcon}
                alt="Clear filter icon"
                className="icon"
              />
            </Button>
          </CustomDropdown>
        ) : (
          <Dropdown
            inputField={inputType?.split(":")[1]}
            options={
              dropdownData[
                (inputType.split(":")[1] + "s") as keyof typeof dropdownData
              ]
            }
          ></Dropdown>
        )
      ) : (
        <input type={inputType} />
      )}
      {isMandatory && <p className="error-placeholder">Error placeholder</p>}
    </label>
  );
};

export default InputField;
