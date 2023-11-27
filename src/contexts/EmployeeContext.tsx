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
  updateEmployeesData: () => {},
  filters: { skills: [], search: [""] },
  updateFilters: () => {},
  idToDelete: 0,
  updateIdToDelete: () => {},
  skills: [],
  departments: [],
  roles: [],
  fetchedData: { fetchedSkills: [], fetchedRoles: [], fetchedDepartments: [] },
  fetchEmployeesData: () => {},
  totalPages: 1,
  searchParams: new URLSearchParams(),
  updateSearchParams: () => {},
  loading: {
    isTableLoading: true,
    isSkillsLoading: true,
    isDepartmentsLoading: true,
    isRoleLoading: true,
  },
  updateLoading: () => {},
  employee: null,
  updateEmployee: () => {},
};

const EmployeeContext = createContext(initialContextValues);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(initialContextValues.loading);
  const updateLoading = (loader: string, value: boolean) => {
    setLoading((prev) => {
      return { ...prev, [loader]: value };
    });
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(initialContextValues.filters);
  const [employeesData, setEmployeesData] = useState(
    initialContextValues.employeesData
  );
  const [skills, setSkills] = useState(initialContextValues.skills);
  const [departments, setDepartments] = useState(
    initialContextValues.departments
  );
  const [idToDelete, setIdToDelete] = useState(initialContextValues.idToDelete);
  const [roles, setRoles] = useState(initialContextValues.roles);
  const [fetchedData, setFetchedData] = useState(
    initialContextValues.fetchedData
  );
  const [totalPages, setTotalPages] = useState(initialContextValues.totalPages);
  // const [employee, setEmployee] = useState(initialContextValues.employee);
  // const updateEmployee = (id: string) => {
  //   setEmployee(id);
  // };
  const { employeeId } = useParams();
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
  const updateFetchedData = (
    dataType: string,
    newData:
      | { id: string; skill: string }[]
      | { id: string; role: string }[]
      | { id: string; department: string }[]
  ) => {
    setFetchedData((prev) => ({ ...prev, [dataType]: newData }));
  };

  const updateFilters = (newFilters: {
    skills?: ISkill[];
    search?: string[];
  }) => {
    console.log("updating");
    if (newFilters.skills || newFilters.search) {
      setFilters((prev) => ({ ...prev, ...newFilters }));
    }
  };

  const updateEmployeesData = (newData: IEmployee[]) => {
    setEmployeesData(newData);
  };

  const updateIdToDelete = (id: number) => {
    setIdToDelete(id);
  };
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
        (employeeData:any) => {
          return {
            ...employeeData,
            lastName: employeeData.lastName ? employeeData.lastName : "",
            skills: employeeData.skills ? employeeData.skills : [],
            role: employeeData.role?.role||"N/A",
            department: employeeData.department?.department||"N/A",
          };
        }
      );
      updateEmployeesData(employeesData);
      setTotalPages(Math.ceil(response.data.data.count / rowsPerPage));
    } catch (error) {
      console.log(error);
    } finally {
      updateLoading("isTableLoading", false);
    }
  };
  useEffect(() => {
    if (!employeeId) {
      console.log("fetching");
      fetchEmployeesData();
    }
  }, [searchParams]);
  useEffect(() => {
    // if (!employee) {
    // }
    // updateSearchParams({ page: "1", sortBy: "id", sortDir: "asc" });
    const fetchSkills = async () => {
      try {
        let response = await getData("/skills");
        updateFetchedData("fetchedSkills", response.data.data);
        setSkills(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        updateLoading("isSkillsLoading", false);
      }
    };

    fetchSkills();
    const fetchDepartments = async () => {
      try {
        let response = await getData("/departments");
        updateFetchedData("fetchedDepartments", response.data);
        setDepartments(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        updateLoading("isDepartmentsLoading", false);
      }
    };
    fetchDepartments();
    const fetchRoles = async () => {
      try {
        let response = await getData("/roles");
        updateFetchedData("fetchedRoles", response.data);
        setRoles(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        updateLoading("isRoleLoading", false);
      }
    };
    fetchRoles();
  }, []);
  const value: IEmployeeContextProps = {
    filters,
    updateFilters,
    employeesData,
    updateEmployeesData,
    idToDelete,
    updateIdToDelete,
    skills,
    departments,
    roles,
    fetchedData,
    fetchEmployeesData,
    totalPages,
    searchParams,
    updateSearchParams,
    loading,
    updateLoading,
    // updateEmployee,
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
