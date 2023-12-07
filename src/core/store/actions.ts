import { IEmployee } from "../../components/Table/types";
import { ISkill } from "../../pages/FormPage/types";
import {
  UPDATE_EMPLOYEES,
  UPDATE_FILTERS,
  UPDATE_LOADING,
  UPDATE_SKILLS,
} from "./actionTypes";

export const updateEmployees = (employees: IEmployee[]) => {
  return {
    type: UPDATE_EMPLOYEES,
    payload: employees,
  };
};

export const updateSkills = (skills: ISkill[]) => {
  return {
    type: UPDATE_SKILLS,
    payload: skills,
  };
};

export const updateFilters = (filters: {
  skills?: ISkill[];
  search?: string[];
}) => {
  return {
    type: UPDATE_FILTERS,
    payload: filters,
  };
};

export const updateLoading = (loadingState: {
  isTableLoading: boolean;
  isSkillsLoading: boolean;
}) => {
  return {
    type: UPDATE_LOADING,
    payload: loadingState,
  };
};

