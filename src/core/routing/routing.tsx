import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import FormPage from "../../pages/FormPage/FormPage";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Layout from "../../Layout/Layout";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        // {
        //   path: "/",
        //   element: <EmployeeListing />,
        // },
        // {
        //   path: "/form_page",
        //   element: <FormPage />,
        // },
        // {
        //   path: "/form_page/:employeeId",
        //   element: <FormPage />,
        // },
        // {
        //   path: "/view_employee_page/:employeeId",
        //   element: <ViewEmployee />,
        // },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react_HRM_App/" }
);
export default router;
