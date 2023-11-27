import { IEmployee } from "../components/Table/types";
import { ISkill } from "../pages/FormPage/types";

export interface IEmployeeContextProps {
  filters: { skills?: ISkill[]; search?: string[] };
  updateFilters: ({
    skills,
    search,
  }: {
    skills?: ISkill[];
    search?: string[];
  }) => void;
  employeesData: IEmployee[];
  updateEmployeesData: ([]: IEmployee[]) => void;
  idToDelete: number;
  updateIdToDelete: (id: number) => void;
  skills: { id: number; skill: string }[];
  departments: { id: number; department: string }[];
  roles: { id: number; role: string }[];
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
    isRoleLoading: boolean;
  };
  updateLoading?: (loader: string, value: boolean) => void;
  employee?: null | string;
  updateEmployee?: (id: string) => void;
}
