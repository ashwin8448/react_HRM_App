import { IEmployee } from "../components/Table/types";
import { ISkill } from "../pages/FormPage/types";

export interface IEmployeeContextProps {
  filters: { skills?: ISkill[]; search?: string[] };
  count: number;
  updateFilters: ({
    skills,
    search,
  }: {
    skills?: ISkill[];
    search?: string[];
  }) => void;
  employeesData: IEmployee[];
  skills: { id: number; skill: string }[];
  fetchEmployeesData: () => void;
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
  };
  updateLoading?: (loader: string, value: boolean) => void;
}
