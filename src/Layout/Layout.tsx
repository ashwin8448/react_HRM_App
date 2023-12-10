import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchData from "../utils/apiFetchCall";
import {
  fetchDepartmentsFailure,
  fetchDepartmentsRequest,
  fetchDepartmentsSuccess,
  fetchEmployeesFailure,
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchRolesFailure,
  fetchRolesRequest,
  fetchRolesSuccess,
  fetchSkillsFailure,
  fetchSkillsRequest,
  fetchSkillsSuccess,
} from "../core/store/actions";
import { apiURL, rowsPerPage } from "../core/config/constants";

const Layout = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // fetch employees
  useEffect(() => {
    const urlParams = {
      params: {
        offset: (Number(searchParams.get("page") || "1") - 1) * rowsPerPage,
        limit: rowsPerPage,
        sortBy: "id" || searchParams.get("sortBy"),
        sortDir: "asc" || searchParams.get("sortDir"),
      },
    };
    fetchData(
      apiURL.employee,
      urlParams,
      dispatch,
      fetchEmployeesRequest,
      fetchEmployeesSuccess,
      fetchEmployeesFailure,
      "Employee details could not be fetched."
    );
    fetchData(
      apiURL.skills,
      {params:{}},
      dispatch,
      fetchSkillsRequest,
      fetchSkillsSuccess,
      fetchSkillsFailure,
      "Skills list could not be fetched."
    );
    fetchData(
      apiURL.roles,
      {params:{}},
      dispatch,
      fetchRolesRequest,
      fetchRolesSuccess,
      fetchRolesFailure,
      "Roles list could not be fetched."
    );
    fetchData(
      apiURL.departments,
      {params:{}},
      dispatch,
      fetchDepartmentsRequest,
      fetchDepartmentsSuccess,
      fetchDepartmentsFailure,
      "Department list could not be fetched."
    );
  }, []);
  const { employeesData, skills, departments, roles } = useSelector(
    (state: any) => ({
      employeesData: state.employees.employeesData,
      skills: state.skills.skills,
      roles: state.roles.roles,
      departments: state.departments.departments,
    })
  );
  console.log(employeesData, skills, roles, departments);
  return (
    <div className="container flex flex-column">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
