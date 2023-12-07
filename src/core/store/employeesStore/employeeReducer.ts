import { IEmployee } from "../../../components/Table/types";
import { FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS } from "./employeeActionTypes";

const employeeReducer = (
  state: { loading: boolean; employees: IEmployee[]; error: Error },
  action: { type?: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case FETCH_EMPLOYEE_SUCCESS:
      return { ...state, employees: action.payload, error: "" };
    case FETCH_EMPLOYEE_FAILURE:
      return { ...state, employees: [], error: action.payload };
    default:
      state;
  }
};

export default employeeReducer;
