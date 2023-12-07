import { ISkill } from "../../../pages/FormPage/types";
import {
  FETCH_SKILL_FAILURE,
  FETCH_SKILL_REQUEST,
  FETCH_SKILL_SUCCESS,
} from "./skillsActionTypes";

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
