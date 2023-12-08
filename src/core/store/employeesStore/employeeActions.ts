import { IEmployee } from "../../../components/Table/types";
import { getData } from "../../api";
import { apiURL } from "../../config/constants";
import {
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
} from "./employeeActionTypes";

export const fetchEmployeesRequest = () => {
  type: FETCH_EMPLOYEE_REQUEST;
};

export const fetchEmployeesSuccess = (employees: IEmployee[]) => {
  type: FETCH_EMPLOYEE_SUCCESS;
  payload: employees;
};

export const fetchEmployeesFailure = (error: Error) => {
  type: FETCH_EMPLOYEE_FAILURE;
  payload: error;
};

export const fetchEmployees = () => {
  return (dispatch: any) => {
    dispatch(fetchEmployeesRequest());
    getData(apiURL.employee)
      .then((response: any) => dispatch(fetchEmployeesSuccess(response)))
      .catch((error) => dispatch(fetchEmployeesFailure(error.message)));
  };
};
