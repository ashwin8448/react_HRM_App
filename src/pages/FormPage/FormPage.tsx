import { useEffect, useRef, useState } from "react";
import closeIcon from "../../assets/images/close_button_icon.svg";
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
import { IFormValues, ISkill } from "./types";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import { IEmployee } from "../../components/Table/types";
import { getData, postData, updateData } from "../../core/api";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const FormPage = () => {
  const { fetchEmployeesData, skills, loading } = useEmployeeContext();
  const [formDataLoading, setFormDataLoading] = useState({
    isDepartmentsLoading: true,
    isRoleLoading: true,
    isFormLoading: true,
  });
  const [departments, setDepartments] = useState<
    { id: number; department: string }[]
  >([]);
  const [roles, setRoles] = useState<{ id: number; role: string }[]>([]);
  const { employeeId } = useParams();
  const [currentEmployeeData, setCurrentEmployeeData] = useState<IEmployee>();

  const updateFormDataLoading = (loader: string, value: boolean) => {
    setFormDataLoading((prev) => {
      return { ...prev, [loader]: value };
    });
  };

  const fetchCurrentEmployeeData = async () => {
    updateFormDataLoading("isFormLoading", true);
    try {
      const response = (await getData(`employee/${employeeId}`)).data.data;
      setCurrentEmployeeData({
        ...response,
        department: response.department.department,
        role: response.role.role,
      });
    } catch (error) {
      console.log(error);
    } finally {
      updateFormDataLoading("isFormLoading", false);
    }
  };

  const fetchDepartments = async () => {
    try {
      let response = await getData("/departments");
      setDepartments(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      updateFormDataLoading("isDepartmentsLoading", false);
    }
  };

  const fetchRoles = async () => {
    try {
      let response = await getData("/roles");
      setRoles(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      updateFormDataLoading("isRoleLoading", false);
    }
  };

  useEffect(() => {
    if (employeeId) fetchCurrentEmployeeData();
    else updateFormDataLoading("isFormLoading", false);
    fetchDepartments();
    fetchRoles();
  }, []);

  const inputTag = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [selectedSkills, setSelectedSkills] = useState<ISkill[]>(
    currentEmployeeData ? currentEmployeeData.skills : []
  );
  const [skillsToDisplay, setSkillsToDisplay] = useState<ISkill[]>(
    skills.filter(
      (skill) => !JSON.stringify(selectedSkills).includes(JSON.stringify(skill))
    )
  );
  const handleAddToSelectedSkills = (currentSkill: ISkill) => {
    setSkillsToDisplay(
      skillsToDisplay.filter((skill) => skill !== currentSkill)
    );
    setSelectedSkills((prev) => [...prev, currentSkill]);
  };
  const handleDeleteFromSelectedSkills = (skillToDelete: ISkill) => {
    setSkillsToDisplay((prev) => [...prev, skillToDelete]);
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToDelete)
    );
  };
  const handleSkillsToDisplay = (filteredSkills: ISkill[]) => {
    setSkillsToDisplay(filteredSkills);
  };
  useEffect(() => {
    if (currentEmployeeData && selectedSkills !== currentEmployeeData.skills) {
      setSelectedSkills(currentEmployeeData.skills);
      handleSkillsToDisplay(
        skills.filter((skill) => !currentEmployeeData.skills.includes(skill))
      );
    }
  }, [currentEmployeeData]);
  const handleClearFilter = () => {
    inputTag.current!.value = "";
    setSkillsToDisplay(skills);
    setSelectedSkills([]);
  };

  const handleFormSubmit = async (values: IFormValues) => {
    let response;
    updateFormDataLoading("isFormLoading", true);
    try {
      const payload = {
        ...values,
        skills: selectedSkills.map((skill) => skill.id),
        role: roles.filter((role) => {
          return role.role === values.role;
        })[0].id,
        department: departments.filter((department) => {
          return department.department === values.department;
        })[0].id,
      };

      if (employeeId) {
        response = await updateData(`/employee/${employeeId}`, payload);
      } else {
        response = await postData("/employee", payload);
      }
    } catch (error) {
      toast.error(
        `Employee details could not be ${employeeId ? "updated" : "added"}.`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } finally {
      updateFormDataLoading("isFormLoading", false);
      if (response?.request.status === 200 || response?.request.status === 201) {
        navigate(`/view_employee_page/${response?.data.data.id}`, {
          replace: true,
        });
        toast.success(
          `Employee details ${employeeId ? "updated" : "added"} successfully.`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
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
  }, [skills, departments, roles]);
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
            {formDataLoading.isFormLoading ||
            formDataLoading.isDepartmentsLoading ||
            formDataLoading.isRoleLoading ||
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
                              ? roles
                                  .sort((a, b) =>
                                    a.role.toLowerCase() > b.role.toLowerCase()
                                      ? 1
                                      : a.role.toLowerCase() <
                                        b.role.toLowerCase()
                                      ? -1
                                      : 0
                                  )
                                  .map((element) => (
                                    <option
                                      key={element.id}
                                      value={element.role}
                                    >
                                      {element.role}
                                    </option>
                                  ))
                              : departments
                                  .sort((a, b) =>
                                    a.department.toLowerCase() >
                                    b.department.toLowerCase()
                                      ? 1
                                      : a.department.toLowerCase() <
                                        b.department.toLowerCase()
                                      ? -1
                                      : 0
                                  )
                                  .map((element) => (
                                    <option
                                      key={element.id}
                                      value={element.department}
                                    >
                                      {element.department}
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
                                  src={closeIcon}
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
