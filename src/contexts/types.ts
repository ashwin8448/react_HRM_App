import { IEmployee } from "../components/Table/types";

export interface IEmployeeContextProps {
  sortConfig: { sortColumn: string; sortOrder: string };
  updateSortConfig: (sortColumn: string) => void;
  filters: { skills?: string[]; search?: string[] };
  updateFilters: ({
    skills,
    search,
  }: {
    skills?: string[];
    search?: string[];
  }) => void;
  employeesData: IEmployee[];
  updateEmployeesData: ([]: IEmployee[]) => void;
  idToDelete: number;
  updateIdToDelete: (id:number)=>void
}
