import { Dispatch } from "react";
import { IEmployee } from "../../components/Table/types";

export interface IEmployeeContextProps {
  state: IReducer,
  count: number;
  dispatch:Dispatch<any>;
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
}

export interface IReducer {
  employeesData: IEmployee[];
  filters: { skills: []; search: [""] };
  skills: {id:number, skill:string}[];
  loading: {
    isTableLoading: true;
    isSkillsLoading: true;
  };
}

export interface IAction {
  type: string,
  payload?:any,
}
