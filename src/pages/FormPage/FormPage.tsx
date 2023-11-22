import { useEffect, useRef, useState } from "react";
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
import { postData, updateData } from "../../core/api";

const FormPage = () => {
  const {
    employeesData,
    fetchEmployeesData,
    fetchedData,
    skills,
    roles,
    departments,
  } = useEmployeeContext();
  const { employeeId } = useParams();
  let currentEmployee: IEmployee | undefined;
  if (employeeId && employeesData.length) {
    [currentEmployee] = filterArray(employeesData, {
      id: [Number(employeeId)],
    });
  }
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    currentEmployee ? currentEmployee!.skills : []
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
  if (currentEmployee)
    if (selectedSkills != currentEmployee!.skills) {
      setSelectedSkills(currentEmployee!.skills);
      handleSkillsToDisplay(
        skills.filter((skill) => !currentEmployee!.skills.includes(skill))
      );
    }

  const handleClearFilter = () => {
    inputTag.current!.value = "";
    setSkillsToDisplay(skills);
    setSelectedSkills([]);
  };
  const handleFormSubmit = async (values: IFormValues) => {
    try {
      const payload = {
        ...values,
        skills: selectedSkills.map((skill) => {
          let id;
          fetchedData.fetchedSkills.forEach(
            (skillsObj: { id: string; skill: string }) => {
              if (skillsObj.skill === skill) {
                id = skillsObj.id;
              }
            }
          );
          return id;
        }),
        role: fetchedData.fetchedRoles.filter((role) => {
          return role.role === values.role;
        })[0].id,
        department: fetchedData.fetchedDepartments.filter((department) => {
          return department.department === values.department;
        })[0].id,
      };
      if (employeeId) {
        await updateData(`/employee/${employeeId}`, payload);
        //patch request
        // updatedData = employeesData.filter(
        //   (employee) => employee.id != currentEmployee!.id
        // );
        // newData = { ...values, skills: selectedSkills, id: currentEmployee!.id };
      } else {
        const response = await postData("/employee", payload);
        console.log(response);
      } //post request
      // newData = { ...values, skills: selectedSkills, id: 1005 };
      // updateEmployeesData([...updatedData, newData]);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
      fetchEmployeesData();
    }
  };

  const initialValues = currentEmployee
    ? {
        firstName: currentEmployee!.firstName,
        lastName: currentEmployee!.lastName,
        dob: currentEmployee!.dob,
        address: currentEmployee!.address,
        phone: currentEmployee!.phone,
        email: currentEmployee!.email,
        isActive: currentEmployee!.isActive,
        designation: currentEmployee!.designation,
        salary: currentEmployee!.salary,
        moreDetails: currentEmployee!.moreDetails,
        dateOfJoining: currentEmployee!.dateOfJoining,
        department: currentEmployee!.department,
        role: currentEmployee!.role,
      }
    : {
        isActive: true,
        designation: "",
        salary: "",
        dateOfJoining: "",
        moreDetails: "",
        role: "",
        department: "",
        firstName: "",
        lastName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
      };
  useEffect(() => {
    setSkillsToDisplay(skills);
  }, [skills, departments, roles, fetchedData]);
  return (
    <>
      {skills.length && departments.length && roles.length ? (
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
                            <option value="">
                              Select a {field.description}
                            </option>
                            {field.name === "role"
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
                              handleAddToSelectedSkills={
                                handleAddToSelectedSkills
                              }
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
                  handleDeleteFromSelectedSkills={
                    handleDeleteFromSelectedSkills
                  }
                />
              </div>
              <div className="buttons-container flex">
                <input className="primary-button" type="reset" />
                <input
                  className="primary-button"
                  type="submit"
                  value="Submit"
                />
              </div>
              {/* <div className="buttons-container flex">
          <input className="primary-button" type="submit" value="Save" />
        </div> */}
            </FormWrapper>
          </Form>
        </Formik>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default FormPage;
