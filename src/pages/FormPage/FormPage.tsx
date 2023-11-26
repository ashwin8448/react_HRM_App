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
import { IEmployee } from "../../components/Table/types";
import { getData, postData, updateData } from "../../core/api";
import { CircularProgress } from "@mui/material";

const FormPage = () => {
  const {
    fetchEmployeesData,
    fetchedData,
    skills,
    roles,
    departments,
    loading,
  } = useEmployeeContext();
  const [loadingForm, setLoadingForm] = useState(true);
  const { employeeId } = useParams();
  const [currentEmployeeData, setCurrentEmployeeData] = useState<IEmployee>();

  const fetchCurrentEmployeeData = async () => {
    setLoadingForm(true);
    try {
      const response = (await getData(`employee/${employeeId}`)).data.data;
      setCurrentEmployeeData({
        ...response,
        department: response.department.department,
        role: response.role.role,
        skills: response.skills
          ? response.skills.map((skill: any) => skill.skill)
          : [1],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingForm(false);
    }
  };

  useEffect(() => {
    if (employeeId) fetchCurrentEmployeeData();
  }, []);

  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    currentEmployeeData ? currentEmployeeData.skills : []
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
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToDelete)
    );
  };

  const handleSkillsToDisplay = (filteredSkills: string[]) => {
    setSkillsToDisplay(filteredSkills);
  };

  if (currentEmployeeData && selectedSkills !== currentEmployeeData.skills) {
    setSelectedSkills(currentEmployeeData.skills);
    handleSkillsToDisplay(
      skills.filter(
        (skill) => !(currentEmployeeData.skills as string[]).includes(skill)
      )
    );
  }

  const handleClearFilter = () => {
    inputTag.current!.value = "";
    setSkillsToDisplay(skills);
    setSelectedSkills([]);
  };

  const handleFormSubmit = async (values: IFormValues) => {
    let response;
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
        response = await updateData(`/employee/${employeeId}`, payload);
      } else {
        response = await postData("/employee", payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (response?.request.status === 200) {
        navigate(`/view_employee_page/${response?.data.data.id}`, {
          replace: true,
        });
        fetchEmployeesData();
      }
    }
  };

  const initialValues = currentEmployeeData
    ? {
        firstName: currentEmployeeData!.firstName,
        lastName: currentEmployeeData!.lastName,
        dob: currentEmployeeData!.dob,
        address: currentEmployeeData!.address,
        phone: currentEmployeeData!.phone,
        email: currentEmployeeData!.email,
        isActive: currentEmployeeData!.isActive,
        designation: currentEmployeeData!.designation,
        salary: currentEmployeeData!.salary,
        moreDetails: currentEmployeeData!.moreDetails,
        dateOfJoining: currentEmployeeData!.dateOfJoining,
        department: currentEmployeeData!.department,
        role: currentEmployeeData!.role,
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
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={Yup.object(validationSchema)}
        onSubmit={handleFormSubmit}
      >
        <Form autoComplete="off" className="form-container">
          <FormWrapper className="page-content employee-details-form">
            {loadingForm ||
            loading.isDepartmentsLoading ||
            loading.isRoleLoading ||
            loading.isSkillsLoading ? (
              <div className="loader">
                <CircularProgress />
              </div>
            ) : (
              <>
                {employeeId ? (
                  <h2>Edit Employee Details</h2>
                ) : (
                  <h2>Add New Employee</h2>
                )}
                {formData.map((fieldsetObj) => (
                  <fieldset key={fieldsetObj.legend} className="flex">
                    <legend>{fieldsetObj.legend}</legend>
                    {fieldsetObj.fields.map((field) => {
                      if (
                        field.inputType === "text" ||
                        field.inputType === "date" ||
                        field.inputType === "tel"
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
                      } else if (field.inputType === "select") {
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
                              ? roles.sort().map((element) => (
                                  <option key={element} value={element}>
                                    {element}
                                  </option>
                                ))
                              : departments.sort().map((element) => (
                                  <option key={element} value={element}>
                                    {element}
                                  </option>
                                ))}
                          </MySelect>
                        );
                      } else if (field.inputType === "custom") {
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
                ))}
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
                  {employeeId === "" ? (
                    <input
                      className="primary-button"
                      type="submit"
                      value="Save"
                    />
                  ) : (
                    <>
                      <input className="primary-button" type="reset" />
                      <input
                        className="primary-button"
                        type="submit"
                        value="Submit"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </FormWrapper>
        </Form>
      </Formik>
    </>
  );
};

export default FormPage;
