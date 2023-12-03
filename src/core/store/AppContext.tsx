import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { IEmployeeContextProps, IReducer } from "./types";
import { apiURL, rowsPerPage } from "../config/constants";
import { useParams, useSearchParams } from "react-router-dom";
import fetchData from "../../utils/apiFetchCall";
import reducer from "./reducer";
import ACTIONS from "./actionTypes";

const initialReducerValues: IReducer = {
  employeesData: [],
  filters: { skills: [], search: [""] },
  skills: [],
  loading: {
    isTableLoading: true,
    isSkillsLoading: true,
  },
};

const initialContextValues: IEmployeeContextProps = {
  state: initialReducerValues,
  dispatch: () => {},
  searchParams: new URLSearchParams(),
  count: 0,
  updateSearchParams: () => {},
  fetchEmployeesData: () => {},
};

const EmployeeContext = createContext(initialContextValues);
let count = initialContextValues.count;

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialReducerValues);
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    sortBy: "id",
    sortDir: "asc",
  });
  const updateSearchParams = (params: {
    page?: string;
    sortBy?: string;
    sortDir?: string;
  }) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      ...params,
    });
  };

  const { employeeId } = useParams();
  const fetchEmployeesData = () => {
    fetchData(
      apiURL.employee,
      (loaderState) =>
        dispatch({
          type: ACTIONS.UPDATE_LOADING,
          payload: { loader: "isTableLoading", value: loaderState },
        }),
      "Employee details could not be fetched from server.",
      {
        params: {
          limit: rowsPerPage,
          offset: (Number(searchParams.get("page") || "1") - 1) * rowsPerPage,
          sortBy: searchParams.get("sortBy") || "id",
          sortDir: searchParams.get("sortDir") || "asc",
        },
      }
    ).then((data) => {
      dispatch({
        type: ACTIONS.UPDATE_EMPLOYEES,
        payload: data.employees.map((employeeData: any) => {
          return {
            ...employeeData,
            lastName: employeeData.lastName ? employeeData.lastName : "",
            skills: employeeData.skills ? employeeData.skills : [],
            role: employeeData.role?.role || "N/A",
            department: employeeData.department?.department || "N/A",
          };
        }),
      });
      count = data.count;
    });
  };
  useEffect(() => {
    if (!employeeId) {
      fetchEmployeesData();
    }
  }, [searchParams]);
  useEffect(() => {
    fetchData(
      apiURL.skills,
      (loaderState) =>
        dispatch({
          type: ACTIONS.UPDATE_LOADING,
          payload: { loader: "isSkillsLoading", value: loaderState },
        }),
      "Skills could not be fetched from server."
    ).then((data) => {
      dispatch({ type: ACTIONS.UPDATE_SKILLS, payload: data });
    });
  }, []);

  const value: IEmployeeContextProps = {
    count,
    state,
    dispatch,
    searchParams,
    updateSearchParams,
    fetchEmployeesData,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export default EmployeeProvider;
