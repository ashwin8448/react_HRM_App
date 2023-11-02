import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import NewOrEditEmployee from "../../pages/NewOrEditEmployee/NewOrEditEmployee";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee";

const router = createBrowserRouter([
  { path: "/", element: <EmployeeListing /> },
  { path: "/form_page", element: <NewOrEditEmployee /> },
  { path: "/view_employee_page", element: <ViewEmployee /> },
]);

export default router;
