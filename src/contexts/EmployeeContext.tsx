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
};

const EmployeeContext = createContext(initialContextValues);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  console.log("Hi from provider");
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);
  const [filters, setFilters] = useState(initialContextValues.filters);
  const [employeesData, setEmployeesData] = useState(
    initialContextValues.employeesData
  );
  const [idToDelete, setIdToDelete] = useState(initialContextValues.idToDelete);
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
  const value: IEmployeeContextProps = {
    sortConfig,
    updateSortConfig,
    filters,
    updateFilters,
    employeesData,
    updateEmployeesData,
    idToDelete,
    updateIdToDelete,
  };
  useEffect(() => {
    console.log("Hi from useEffect hook");
    const fetchEmployeesData = async () => {
      try {
        const result = await getData(
          "/employee?limit=200&offset=0&sortBy=id&sortDir=asc"
        );
        let employeesData = result.data.data.employees.map(
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
    // const fetchSkillsData = async () => {
    //   try {
    //     const result = await getData("/skills")
    //     let skills = skills
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchSkillsData();
  }, []);
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
