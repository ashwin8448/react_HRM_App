
import { dropdownData } from "../../core/config/constants";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import IInput from "./types";

const InputField = ({
  description,
  isMandatory,
  inputType,
  arrayName,
  selectedSkills,
  skillsToDisplay,
  handleAddToSelectedSkills,
  handleSkillsToDisplay,
  inputTag,
  handleClearFilter,
}: IInput) => {
  return (
    <label className="flex flex-column">
      <div>
        {isMandatory && <span className="asterisk">*</span>}
        <span> {description}:</span>
      </div>
      {inputType == "custom" ? (
        arrayName == "skills" ? (
          <CustomDropdown
            selectedSkills={selectedSkills}
            handleAddToSelectedSkills={handleAddToSelectedSkills}
            handleSkillsToDisplay={handleSkillsToDisplay}
            skillsToDisplay={skillsToDisplay}
            placeholder="Click to add skills"
            inputTag={inputTag}
          >
            <Button onClick={handleClearFilter}>
              <img
                src={clearFilterIcon}
                alt="Clear filter icon"
                className="icon"
              />
            </Button>
          </CustomDropdown>
        ) : (
          <Dropdown
            description={description}
            options={dropdownData[arrayName as keyof typeof dropdownData]}
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
