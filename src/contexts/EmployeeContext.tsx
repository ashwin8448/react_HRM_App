import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IEmployeeContextProps } from "./types";
import { IEmployee } from "../components/Table/types";
import { getData } from "../core/api";
import { rowsPerPage } from "../core/config/constants";
import { useParams, useSearchParams } from "react-router-dom";
import { ISkill } from "../pages/FormPage/types";

const initialContextValues: IEmployeeContextProps = {
  employeesData: [],
  count: 0,
  filters: { skills: [], search: [""] },
  updateFilters: () => {},
  skills: [],
  fetchEmployeesData: () => {},
  searchParams: new URLSearchParams(),
  updateSearchParams: () => {},
  loading: {
    isTableLoading: true,
    isSkillsLoading: true,
  },
  updateLoading: () => {},
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

  const [searchParams, setSearchParams] = useSearchParams();
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
  const updateEmployeesData = (newData: IEmployee[]) => {
    setEmployeesData(newData);
  };
  
  const [skills, setSkills] = useState(initialContextValues.skills);
  const { employeeId } = useParams();
  const fetchEmployeesData = async () => {
    try {
      updateLoading("isTableLoading", true);
      const searchSortBy = searchParams.get("sortBy") || "id";
      const searchSortDir = searchParams.get("sortDir") || "asc";
      const searchPage = searchParams.get("page") || "1";
      const response = await getData(`/employee`, {
        params: {
          limit: rowsPerPage,
          offset: (Number(searchPage) - 1) * rowsPerPage,
          sortBy: searchSortBy ? searchSortBy : "id",
          sortDir: searchSortDir ? searchSortDir : "asc",
        },
      });
      let employeesData = response.data.data.employees.map(
        (employeeData: any) => {
          return {
            ...employeeData,
            lastName: employeeData.lastName ? employeeData.lastName : "",
            skills: employeeData.skills ? employeeData.skills : [],
            role: employeeData.role?.role || "N/A",
            department: employeeData.department?.department || "N/A",
          };
        }
      );
      updateEmployeesData(employeesData);
      count = response.data.data.count;
    } catch (error) {
      
      console.log(error)
    } finally {
      updateLoading("isTableLoading", false);
    }
  };
  useEffect(() => {
    if (!employeeId) {
      fetchEmployeesData();
    }
  }, [searchParams]);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        let response = await getData("/skills");
        setSkills(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        updateLoading("isSkillsLoading", false);
      }
    };
    fetchSkills();
  }, []);

  const value: IEmployeeContextProps = {
    count,
    filters,
    employeesData,
    skills,
    fetchEmployeesData,
    searchParams,
    loading,
    updateFilters,
    updateSearchParams,
    updateLoading,
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
