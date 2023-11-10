import { useRef, useState } from "react";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import { formData, skills } from "../../core/config/constants";
import FormWrapper from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  MySelect,
  MyTextInput,
} from "../../components/CustomInput/CustomInput";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import Button from "../../components/Button/Button";

const NewOrEditEmployee = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsToDisplay, setSkillsToDisplay] = useState<string[]>(skills);
  const inputTag = useRef<HTMLInputElement>(null);

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

  const handleClearFilter = () => {
    inputTag.current!.value = "";
    setSkillsToDisplay(skills);
    setSelectedSkills([]);
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
        doj: "",
        department: "",
        role: "",
        jobType: "", // added for our select
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        lastName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        dob: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        doj: Yup.string().required("Required"),
        department: Yup.string().required("Required"),
        role: Yup.string().required("Required"),
        skill: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      <FormWrapper className="page-content employee-details-form">
        <h2>Add New Employee</h2>
        {formData.map((fieldsetObj) => {
          return (
            <fieldset key={fieldsetObj.legend} className="flex">
              <legend>{fieldsetObj.legend}</legend>
              {fieldsetObj.fields.map((field) => {
                if (
                  field.inputType == "text" ||
                  field.inputType == "date" ||
                  field.inputType == "tel"
                ) {
                  return (
                    <MyTextInput
                      key={field.name}
                      label={field.description}
                      name={field.name}
                      type={field.inputType}
                      isMandatory={field.isMandatory}
                    />
                  );
                } else if (field.inputType == "select")
                  return (
                    <MySelect
                      key={field.name}
                      label={field.description}
                      name={field.name}
                      isMandatory={field.isMandatory}
                    >
                      <option value="">Select a {field.description}</option>
                      {field.data?.map((element) => (
                        <option key={element} value={element}>
                          {element}
                        </option>
                      ))}
                    </MySelect>
                  );
                else if (field.inputType == "custom") {
                  return (
                    <div key={field.name} className="flex flex-column input-field">
                      <label>Skills</label>
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
                    </div>
                  );
                }
                // return (
                //   <InputField
                //     key={field.description}
                //     field={field}
                //     selectedSkills={selectedSkills}
                //     skillsToDisplay={skillsToDisplay}
                //     handleAddToSelectedSkills={handleAddToSelectedSkills}
                //     handleSkillsToDisplay={handleSkillsToDisplay}
                //     handleClearFilter={handleClearFilter}
                //     inputTag={inputTag}
                //   />
                // );
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
    </Formik>
  );
};

export default NewOrEditEmployee;
