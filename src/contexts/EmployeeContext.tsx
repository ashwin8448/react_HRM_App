import { ReactNode, createContext, useContext, useState } from "react";
import { IEmployeeContextProps } from "./types";

const initialContextValues: IEmployeeContextProps = {
  sortConfig: { sortColumn: "id", sortOrder: "asc" },
  updateSortConfig: () => {},
  filters: { skills: [], search: [] },
  updateFilters: () => {},
};

const EmployeeContext = createContext(initialContextValues);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);
  const [filters, setFilters] = useState(initialContextValues.filters);
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

  const updateFilters = (newFilters: { skills?: string[]; search?: [] }) => {
    if (newFilters) {
      setFilters((prev) => ({ ...prev, ...newFilters }));
    }
  };

  const value: IEmployeeContextProps = {
    sortConfig,
    updateSortConfig,
    filters,
    updateFilters,
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
