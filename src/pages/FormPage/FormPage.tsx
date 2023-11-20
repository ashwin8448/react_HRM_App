import { useRef, useState } from "react";
import clearFilterIcon from "../../assets/images/clear_filter_icon.svg";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import { formData } from "../../core/config/constants";
import FormWrapper from "./styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  MySelect,
  MyTextInput,
} from "../../components/CustomInput/CustomInput";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import Button from "../../components/Button/Button";
import validationSchema from "./validationSchema";
import { IFormValues } from "./types";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import { filterArray } from "../../utils/filterArray";
import { IEmployee } from "../../components/Table/types";

const FormPage = () => {
  const { employeesData, updateEmployeesData, skills, roles, departments } =
    useEmployeeContext();
  const { employeeId } = useParams();
  let currentEmployee: IEmployee | undefined;
  if (employeeId) {
    [currentEmployee] = filterArray(employeesData, {
      id: [Number(employeeId)],
    });
  }
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    employeeId ? currentEmployee!.skills : []
  );
  const [skillsToDisplay, setSkillsToDisplay] = useState<string[]>(
    skills.filter((skill) => !selectedSkills.includes(skill))
  );
  const inputTag = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  const handleFormSubmit = (values: IFormValues) => {
    //Random id assigned. remove this
    let newData: IEmployee;
    let updatedData = employeesData;
    if (employeeId) {
      updatedData = employeesData.filter(
        (employee) => employee.id != currentEmployee!.id
      );
      newData = { ...values, skills: selectedSkills, id: currentEmployee!.id };
    } else newData = { ...values, skills: selectedSkills, id: 1005 };
    updateEmployeesData([...updatedData, newData]);
    navigate("/");
  };

  const initialValues = employeeId
    ? {
        firstName: currentEmployee!.firstName,
        lastName: currentEmployee!.lastName,
        dob: currentEmployee!.dob,
        address: currentEmployee!.address,
        phone: currentEmployee!.phone,
        email: currentEmployee!.email,
        doj: currentEmployee!.dob,
        department: currentEmployee!.department,
        role: currentEmployee!.role,
      }
    : {
        firstName: "",
        lastName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
        doj: "",
        department: "",
        role: "",
      };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={handleFormSubmit}
    >
      <Form autoComplete="off">
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
                        {field.name === "Role"
                          ? roles.map((element) => (
                              <option key={element} value={element}>
                                {element}
                              </option>
                            ))
                          : departments.map((element) => (
                              <option key={element} value={element}>
                                {element}
                              </option>
                            ))}
                      </MySelect>
                    );
                  else if (field.inputType == "custom") {
                    return (
                      <div
                        key={field.name}
                        className="flex flex-column input-field"
                      >
                        <label>Skills</label>
                        <CustomDropdown
                          dropdownLocation="form"
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
          {/* <div className="buttons-container flex">
          <input className="primary-button" type="submit" value="Save" />
        </div> */}
        </FormWrapper>
      </Form>
    </Formik>
  );
};

export default FormPage;
