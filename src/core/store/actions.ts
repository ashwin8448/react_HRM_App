import {
  IDepartment,
  IEmployee,
  IEmployeeData,
  IRole,
} from "../../components/Table/types";
import { ISkill } from "../../pages/FormPage/types";
import {
  FETCH_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENT_REQUEST,
  FETCH_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_SKILL_FAILURE,
  FETCH_SKILL_REQUEST,
  FETCH_SKILL_SUCCESS,
  UPDATE_FILTERS,
} from "./actionTypes";

//employees
export const fetchEmployeesRequest = () => ({
  type: FETCH_EMPLOYEE_REQUEST,
});

export const fetchEmployeesSuccess = (
  newData: IEmployeeData | ISkill[] | IDepartment[] | IRole[]
) => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload: newData,
});

export const fetchEmployeesFailure = (error: Error) => ({
  type: FETCH_EMPLOYEE_FAILURE,
  payload: error,
});

// export const fetchEmployees = () => {
//   return (dispatch: any) => {
//     dispatch(fetchEmployeesRequest());
//     getData(apiURL.employee)
//       .then((response: any) => dispatch(fetchEmployeesSuccess(response)))
//       .catch((error) => dispatch(fetchEmployeesFailure(error.message)));
//   };
// };

//skills
export const fetchSkillsRequest = () => ({
  type: FETCH_SKILL_REQUEST,
});

export const fetchSkillsSuccess = (
  newData: IEmployeeData | ISkill[] | IDepartment[] | IRole[]
) => ({
  type: FETCH_SKILL_SUCCESS,
  payload: newData,
});

export const fetchSkillsFailure = (error: Error) => ({
  type: FETCH_SKILL_FAILURE,
  payload: error,
});

//roles
export const fetchRolesRequest = () => ({
  type: FETCH_ROLES_REQUEST,
});

export const fetchRolesSuccess = (
  newData: IEmployeeData | ISkill[] | IDepartment[] | IRole[]
) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: newData,
});

export const fetchRolesFailure = (error: Error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: error,
});

//departments
export const fetchDepartmentsRequest = () => ({
  type: FETCH_DEPARTMENT_REQUEST,
});

export const fetchDepartmentsSuccess = (
  newData: IEmployeeData | ISkill[] | IDepartment[] | IRole[]
) => ({
  type: FETCH_DEPARTMENT_SUCCESS,
  payload: newData,
});

export const fetchDepartmentsFailure = (error: Error) => ({
  type: FETCH_DEPARTMENT_FAILURE,
  payload: error,
});
// export const fetchSkills = () => {
//   return (dispatch: any) => {
//     dispatch(fetchSkillsRequest());
//     getData(apiURL.skills)
//       .then((response: any) => dispatch(fetchSkillsSuccess(response)))
//       .catch((error) => dispatch(fetchSkillsFailure(error.message)));
//   };
// };

//filters
export const update_filters = (filters: { skills?: ISkill[]; search?: string[] }) => ({
  type: UPDATE_FILTERS,
  payload: filters,
});
