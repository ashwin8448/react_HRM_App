import { ReactNode, createContext, useContext, useState } from "react";
import { IEmployeeContextProps } from "./types";

const initialContextValues: IEmployeeContextProps = {
  sortConfig: { sortColumn: "id", sortOrder: "asc" },
  updateSortConfig: () => {},
  filters: [],
  updateFilters: () => {},
};

const EmployeeContext = createContext(initialContextValues);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);
  const [filters, setFilters] = useState<string[]>(
    initialContextValues.filters
  );
  const updateSortConfig = (sortColumn: string) => {
    setSortConfig((prevConfig) => ({
      sortColumn,
      sortOrder: prevConfig.sortColumn === sortColumn ? "desc" : "asc",
    }));
  };
  const updateFilters = (filters: string[]) => {
    setFilters(filters);
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
