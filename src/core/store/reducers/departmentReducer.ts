import {
  FETCH_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENT_REQUEST,
  FETCH_DEPARTMENT_SUCCESS,
} from "../actionTypes";

const initialState = {
  departments: [],
  loading: [],
  error: "",
};
const departmentReducer = (
  state = initialState,
  action: { type?: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_DEPARTMENT_REQUEST:
      return { ...state, loading: true };
    case FETCH_DEPARTMENT_SUCCESS:
      return { loading: false, departments: action.payload, error: "" };
    case FETCH_DEPARTMENT_FAILURE:
      return { loading: false, departments: [], error: action.payload };
    default:
      return state;
  }
};

export default departmentReducer;
