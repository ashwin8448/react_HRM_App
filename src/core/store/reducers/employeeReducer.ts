import {
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  employeesData: {},
  error: "",
};

const employeeReducer = (
  state = initialState,
  action: { type?: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case FETCH_EMPLOYEE_SUCCESS:
      return { loading:false, employeesData: action.payload, error: "" };
    case FETCH_EMPLOYEE_FAILURE:
      return { loading:false, employeesData: [], error: action.payload };
    default:
      return state;
  }
};

export default employeeReducer;
