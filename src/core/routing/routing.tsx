import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import FormPage from "../../pages/FormPage/FormPage";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee";

const router = createBrowserRouter(
  [
    { path: "/", element: <EmployeeListing /> },
    { path: "/form_page/", element: <FormPage /> },
    { path: "/form_page/:employeeId", element: <FormPage /> },
    { path: "/view_employee_page/:employeeId", element: <ViewEmployee /> },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react_HRM_App/" }
);

export default router;
