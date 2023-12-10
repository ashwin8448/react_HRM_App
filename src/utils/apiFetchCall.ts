import { toast } from "react-toastify";
import { getData } from "../core/api";
import { Dispatch } from "redux";
import { IDepartment, IEmployeeData, IRole } from "../components/Table/types";
import { ISkill } from "../pages/FormPage/types";

const fetchData = async (
  url: string,
  urlParams: {
    params: { [key: string]: string | number };
  },
  dispatch: Dispatch,
  loadAction: () => { type: string },
  successAction: (
    newData: IEmployeeData | ISkill[] | IDepartment[] | IRole[]
  ) => {
    type: string;
    payload: typeof newData;
  },
  failureAction: (error: Error) => { type: string; payload: Error },
  errorMessage: string
) => {
  dispatch(loadAction());
  try {
    let response = await getData(url, urlParams);
    if (url.includes("/skills") || url.includes("/employee")) {
      if (!response.data.data) {
        throw new Error();
      }
      dispatch(successAction(response.data.data));
    } else dispatch(successAction(response.data));
  } catch (error: any) {
    toast.error(errorMessage);
    dispatch(failureAction(error));
  }
};

export default fetchData;
