import { FETCH_SKILL_FAILURE, FETCH_SKILL_REQUEST, FETCH_SKILL_SUCCESS } from "./skillsActionTypes";

const initialState = {
  loading: false,
  employees: [],
  error: "",
};

const skillsReducer = (
  state=initialState,
  action: { type?: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_SKILL_REQUEST:
      return { ...state, loading: true };
    case FETCH_SKILL_SUCCESS:
      return { ...state, skills: action.payload, error: "" };
    case FETCH_SKILL_FAILURE:
      return { ...state, skills: [], error: action.payload };
    default:
      state;
  }
};

export default skillsReducer;
