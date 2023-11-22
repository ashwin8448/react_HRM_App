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
  updateIdToDelete: (id: number) => void;
  skills: string[];
  departments: string[];
  roles: string[];
  fetchedData: {
    fetchedSkills: { id: string; skill: string }[];
    fetchedRoles: { id: string; role: string }[];
    fetchedDepartments: { id: string; department: string }[];
  };
  fetchEmployeesData: () => void;
  totalPages:number;
  currentPage:number,
  updateCurrentPage: (newPage:number)=>void
}
