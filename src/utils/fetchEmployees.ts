import { rowsPerPage } from "../core/config/constants";

const fetchEmployeesData = () => {
  fetchData(
    apiURL.employee,
    (loaderState) =>
      dispatch({
        type: ACTIONS.UPDATE_LOADING,
        payload: { loader: "isTableLoading", value: loaderState },
      }),
    "Employee details could not be fetched from server.",
    {
      params: {
        limit: rowsPerPage,
        offset: (Number(searchParams.get("page") || "1") - 1) * rowsPerPage,
        sortBy: searchParams.get("sortBy") || "id",
        sortDir: searchParams.get("sortDir") || "asc",
      },
    }
  ).then((data) => {
    dispatch({
      type: ACTIONS.UPDATE_EMPLOYEES,
      payload: data.employees.map((employeeData: any) => {
        return {
          ...employeeData,
          lastName: employeeData.lastName ? employeeData.lastName : "",
          skills: employeeData.skills ? employeeData.skills : [],
          role: employeeData.role?.role || "N/A",
          department: employeeData.department?.department || "N/A",
        };
      }),
    });
    count = data.count;
  });
};

export default fetchEmployeesData;
