import { ISkill } from "../../../pages/FormPage/types";
import { getData } from "../../api";
import { apiURL } from "../../config/constants";
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

export const fetchSkills = () => {
  return (dispatch: any) => {
    dispatch(fetchSkillsRequest());
    getData(apiURL.skills)
      .then((response: any) => dispatch(fetchSkillsSuccess(response)))
      .catch((error) => dispatch(fetchSkillsFailure(error.message)));
  };
};
