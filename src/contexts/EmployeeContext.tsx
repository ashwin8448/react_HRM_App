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
import { useSearchParams } from "react-router-dom";

const initialContextValues: IEmployeeContextProps = {
  employeesData: [],
  updateEmployeesData: () => {},
  sortConfig: { sortColumn: "id", sortOrder: "asc" },
  updateSortConfig: () => {},
  filters: { skills: [], search: [] },
  updateFilters: () => {},
  idToDelete: 0,
  updateIdToDelete: () => {},
  skills: [],
  departments: [],
  roles: [],
  fetchedData: { fetchedSkills: [], fetchedRoles: [], fetchedDepartments: [] },
  fetchEmployeesData: () => {},
  totalPages: 0,
  currentPage: 1,
  updateCurrentPage: () => {},
};

const EmployeeContext = createContext(initialContextValues);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);
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
  const [currentPage, setCurrentPage] = useState(
    initialContextValues.currentPage
  );
  const updateCurrentPage = (newPage: number) => {
    setCurrentPage(newPage);
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
  const updateSortConfig = (sortColumn: string) => {
    setSortConfig((prevConfig) => ({
      sortColumn,
      sortOrder:
        prevConfig.sortColumn === sortColumn
          ? prevConfig.sortOrder === "desc"
            ? "asc"
            : "desc"
          : "asc",
    }));
  };

  const updateFilters = (newFilters: {
    skills?: string[];
    search?: string[];
  }) => {
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
      const response = await getData(`/employee`, {
        params: {
          limit: rowsPerPage,
          offset: currentPage * (rowsPerPage - 1),
          sortBy: sortConfig.sortColumn,
          sortDir: sortConfig.sortColumn,
        },
      });
      let employeesData = response.data.data.employees.map(
        (employeeData: any) => {
          return {
            ...employeeData,
            role: employeeData.role ? employeeData.role.role : "",
            department: employeeData.department
              ? employeeData.department.department
              : "",
            lastName: employeeData.lastName ? employeeData.lastName : "",
            skills: employeeData.skills
              ? employeeData.skills.map((skill: any) => skill.skill)
              : [1],
          };
        }
      );
      updateEmployeesData(employeesData);
      setTotalPages(Math.ceil(response.data.data.count / rowsPerPage));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEmployeesData();
  }, [currentPage, sortConfig]);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        let response = await getData("/skills");
        updateFetchedData("fetchedSkills", response.data.data);
        let skills = response.data.data.map((skill: any) => skill.skill);
        setSkills(skills);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSkills();
    const fetchDepartments = async () => {
      try {
        let response = await getData("/departments");
        updateFetchedData("fetchedDepartments", response.data);
        let departments = response.data.map(
          (department: any) => department.department
        );
        setDepartments(departments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartments();
    const fetchRoles = async () => {
      try {
        let response = await getData("/roles");
        updateFetchedData("fetchedRoles", response.data);
        let roles = response.data.map((role: any) => role.role);
        setRoles(roles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoles();
  }, []);
  const value: IEmployeeContextProps = {
    sortConfig,
    updateSortConfig,
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
    currentPage,
    updateCurrentPage,
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
