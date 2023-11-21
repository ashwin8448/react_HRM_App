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
  updateSkills: ([]: string[]) => void;
  departments: string[];
  updateDepartments: ([]: string[]) => void;
  roles: string[];
  updateRoles: ([]: string[]) => void;
  fetchedData: {
    fetchedSkills: { id: string; skill: string }[];
    fetchedRoles: { id: string; role: string }[];
    fetchedDepartments: { id: string; department: string }[];
  };
  updateFetchedData: (dataType:string,[]:
    | { id: string; skill: string }[]
    | { id: string; role: string }[]
    | { id: string; department: string }[]) => void;
}
