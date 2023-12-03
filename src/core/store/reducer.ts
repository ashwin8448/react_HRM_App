import ACTIONS from "./actionTypes";
import { IAction, IReducer } from "./types";

const reducer = (state: IReducer, action: IAction) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EMPLOYEES:
      return { ...state, employeesData: action.payload };
    case ACTIONS.UPDATE_SKILLS:
      return { ...state, skills: action.payload };
    case ACTIONS.UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case ACTIONS.UPDATE_LOADING:
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
