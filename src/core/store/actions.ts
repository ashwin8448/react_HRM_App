import { IEmployee } from "../../components/Table/types";
import { ISkill } from "../../pages/FormPage/types";
import { getData } from "../api";
import { apiURL } from "../config/constants";
import {
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_SKILL_FAILURE,
  FETCH_SKILL_REQUEST,
  FETCH_SKILL_SUCCESS,
  UPDATE_FILTERS,
} from "./actionTypes";

//employees
export const fetchEmployeesRequest = () => {
  type: FETCH_EMPLOYEE_REQUEST;
};

export const fetchEmployeesSuccess = (employees: IEmployee[]) => {
  type: FETCH_EMPLOYEE_SUCCESS;
  payload: employees;
};

export const fetchEmployeesFailure = (error: Error) => {
  type: FETCH_EMPLOYEE_FAILURE;
  payload: error;
};

export const fetchEmployees = () => {
  return (dispatch: any) => {
    dispatch(fetchEmployeesRequest());
    getData(apiURL.employee)
      .then((response: any) => dispatch(fetchEmployeesSuccess(response)))
      .catch((error) => dispatch(fetchEmployeesFailure(error.message)));
  };
};

//skills
export const fetchSkillsRequest = () => {
  type: FETCH_SKILL_REQUEST;
};

export const fetchSkillsSuccess = (skills: ISkill[]) => {
  type: FETCH_SKILL_SUCCESS;
  payload: skills;
};

export const fetchSkillsFailure = (error: Error) => {
  type: FETCH_SKILL_FAILURE;
  payload: error;
};

export const fetchSkills = () => {
  return (dispatch: any) => {
    dispatch(fetchSkillsRequest());
    getData(apiURL.skills)
      .then((response: any) => dispatch(fetchSkillsSuccess(response)))
      .catch((error) => dispatch(fetchSkillsFailure(error.message)));
  };
};

//filters
export const update_filters = (filters: { skills: []; search: [""] }) => {
  return {
    type: UPDATE_FILTERS,
    payload: filters,
  };
};