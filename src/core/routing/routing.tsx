import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import NewOrEditEmployee from "../../pages/NewOrEditEmployee/NewOrEditEmployee";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee";

const router = createBrowserRouter(
  [
    { path: "/", element: <EmployeeListing /> },
    { path: "/form_page/", element: <NewOrEditEmployee /> },
    { path: "/form_page/:employeeId", element: <NewOrEditEmployee /> },
    { path: "/view_employee_page/:employeeId", element: <ViewEmployee /> },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react_HRM_App/" }
);

export default router;
