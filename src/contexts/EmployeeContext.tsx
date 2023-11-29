import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IEmployeeContextProps } from "./types";
import { apiURL, rowsPerPage } from "../core/config/constants";
import { useParams, useSearchParams } from "react-router-dom";
import { ISkill } from "../pages/FormPage/types";
import fetchData from "../utils/apiFetchCall";

const initialContextValues: IEmployeeContextProps = {
  employeesData: [],
  count: 0,
  filters: { skills: [], search: [""] },
  updateFilters: () => {},
  skills: [],
  searchParams: new URLSearchParams(),
  updateSearchParams: () => {},
  loading: {
    isTableLoading: true,
    isSkillsLoading: true,
  },
  updateLoading: () => {},
  fetchEmployeesData:()=>{}
};

const EmployeeContext = createContext(initialContextValues);

let count = initialContextValues.count;

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(initialContextValues.loading);
  const updateLoading = (loader: string, value: boolean) => {
    setLoading((prev) => {
      return { ...prev, [loader]: value };
    });
  };

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
    setSearchParams(
      {
        ...Object.fromEntries(searchParams.entries()),
        ...params,
      },
      { replace: true }
    );
  };
  const [filters, setFilters] = useState(initialContextValues.filters);
  const updateFilters = (newFilters: {
    skills?: ISkill[];
    search?: string[];
  }) => {
    if (newFilters.skills || newFilters.search) {
      setFilters((prev) => ({ ...prev, ...newFilters }));
    }
  };

  const [employeesData, setEmployeesData] = useState(
    initialContextValues.employeesData
  );

  const [skills, setSkills] = useState(initialContextValues.skills);
  const { employeeId } = useParams();
  const fetchEmployeesData = () => {
    fetchData(
      apiURL.employee,
      (loaderState) => updateLoading("isTableLoading", loaderState),
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
      setEmployeesData(
        data.employees.map((employeeData: any) => {
          return {
            ...employeeData,
            lastName: employeeData.lastName ? employeeData.lastName : "",
            skills: employeeData.skills ? employeeData.skills : [],
            role: employeeData.role?.role || "N/A",
            department: employeeData.department?.department || "N/A",
          };
        })
      );
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
      (loaderState) => updateLoading("isSkillsLoading", loaderState),
      "Skills could not be fetched from server."
    ).then((data) => {
      setSkills(data);
    });
  }, []);

  const value: IEmployeeContextProps = {
    count,
    filters,
    employeesData,
    skills,
    searchParams,
    loading,
    updateFilters,
    updateSearchParams,
    updateLoading,
    fetchEmployeesData
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
