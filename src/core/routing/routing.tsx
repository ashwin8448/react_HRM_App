import { Routes, Route } from "react-router-dom";
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import FormPage from "../../pages/FormPage/FormPage";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeListing />} />
      <Route path="/form_page/" element={<FormPage />} />

      <Route path="/form_page/:employeeId" element={<FormPage />} />
      <Route
        path="/view_employee_page/:employeeId"
        element={<ViewEmployee />}
      />
    </Routes>
  );
};
export default AppRoutes;
