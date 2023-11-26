import { IEmployee } from "../components/Table/types";

export interface IEmployeeContextProps {
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
  totalPages: number;
  searchParams: URLSearchParams;
  updateSearchParams: ({
    page,
    sortBy,
    sortDir,
  }: {
    page?: string;
    sortBy?: string;
    sortDir?: string;
  }) => void;
  loading: {
    [key: string]: boolean;

    isTableLoading: boolean;
    isSkillsLoading: boolean;
    isDepartmentsLoading: boolean;
    isRoleLoading: boolean,
  };
  updateLoading:(loader:string, value:boolean)=>void
}
