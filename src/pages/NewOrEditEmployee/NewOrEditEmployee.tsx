import { useState } from "react";
import InputField from "../../components/InputField/InputField";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import { formData, skills } from "../../core/config/constants";
import FormWrapper from "./styles";

const NewOrEditEmployee = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsToDisplay, setSkillsToDisplay] = useState<string[]>(skills);

  const handleAddToSelectedSkills = (currentSkill: string) => {
    setSkillsToDisplay(
      skillsToDisplay.filter((skill) => skill !== currentSkill)
    );
    setSelectedSkills((prev) => [...prev, currentSkill]);
  };

  const handleDeleteFromSelectedSkills = (skillToDelete: string) => {
    setSkillsToDisplay((prev) => [...prev, skillToDelete]);
    setSelectedSkills(selectedSkills.filter((skill) => skill != skillToDelete));
  };

  const handleSkillsToDisplay = (filteredSkills: string[]) => {
    setSkillsToDisplay(filteredSkills);
  };
  return (
    <FormWrapper className="page-content employee-details-form">
      <h2>Add New Employee</h2>
      {formData.map((fieldsetObj) => {
        return (
          <fieldset key={fieldsetObj.legend} className="flex">
            <legend>{fieldsetObj.legend}</legend>
            {fieldsetObj.fields.map((field) => {
              return (
                <InputField
                  key={field.description}
                  description={field.description}
                  inputType={field.inputType}
                  isMandatory={field.isMandatory}
                  selectedSkills={selectedSkills}
                  skillsToDisplay={skillsToDisplay}
                  handleAddToSelectedSkills={handleAddToSelectedSkills}
                  handleSkillsToDisplay={handleSkillsToDisplay}
                />
              );
            })}
          </fieldset>
        );
      })}
      <div>
        <SelectedSkills
          description="Selected skill(s)"
          isView={false}
          selectedSkills={selectedSkills}
          handleDeleteFromSelectedSkills={handleDeleteFromSelectedSkills}
        />
      </div>
      <div className="buttons-container flex">
        <input className="primary-button" type="reset" />
        <input className="primary-button" type="submit" value="Submit" />
      </div>
      <div className="buttons-container flex">
        <input className="primary-button" type="submit" value="Save" />
      </div>
    </FormWrapper>
  );
};

export default NewOrEditEmployee;
