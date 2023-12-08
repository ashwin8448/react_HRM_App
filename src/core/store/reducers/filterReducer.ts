import { UPDATE_FILTERS } from "../actionTypes";

const initialState = {
  filters: { skills: [], search: [""] },
};
const filterReducer = (
  state = initialState,
  action: { type?: string; payload?: any }
) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
