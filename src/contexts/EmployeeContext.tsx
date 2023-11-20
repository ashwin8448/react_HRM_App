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
  updateSkills: () => {},
  departments: [],
  updateDepartments: () => {},
  roles: [],
  updateRoles: () => {},
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
  const updateRoles = (newRoles: string[]) => {
    setRoles(newRoles);
  };
  const updateSkills = (newSkills: string[]) => {
    setSkills(newSkills);
  };
  const updateDepartments = (newDepartments: string[]) => {
    setDepartments(newDepartments);
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

  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        const response = await getData(
          "/employee?limit=200&offset=0&sortBy=id&sortDir=asc"
        );
        let employeesData = response.data.data.employees.map(
          (employeeData: any) => {
            return {
              ...employeeData,
              role: employeeData.role ? employeeData.role.role : "",
              department: employeeData.department
                ? employeeData.department.department
                : "",
              skills: employeeData.skills
                ? employeeData.skills.map((skill: any) => skill.skill)
                : [1],
            };
          }
        );
        updateEmployeesData(employeesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployeesData();

    const fetchSkills = async () => {
      try {
        let response = await getData("/skills");
        let skills = response.data.data.map((skill: any) => skill.skill);
        updateSkills(skills);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSkills();
    const fetchDepartments = async () => {
      try {
        let response = await getData("/departments");
        let departments = response.data.map(
          (department: any) => department.department
        );
        updateDepartments(departments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartments();
    const fetchRoles = async () => {
      try {
        let response = await getData("/roles");
        let roles = response.data.map((role: any) => role.role);
        updateRoles(roles);
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
    updateSkills,
    departments,
    updateDepartments,
    roles,
    updateRoles,
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
