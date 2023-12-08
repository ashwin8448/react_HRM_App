import { UPDATE_EMPLOYEES, UPDATE_FILTERS, UPDATE_LOADING, UPDATE_SKILLS } from "./actionTypes";
import { IAction, IReducer } from "./types";

const reducer = (state: IReducer, action: IAction) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES:
      return { ...state, employeesData: action.payload };
    case UPDATE_SKILLS:
      return { ...state, skills: action.payload };
    case UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case UPDATE_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.loader]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
