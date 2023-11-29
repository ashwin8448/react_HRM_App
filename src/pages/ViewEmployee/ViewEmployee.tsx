import { useNavigate, useParams } from "react-router-dom";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import DivWrapper from "./styles";
import { useState, useEffect } from "react";
import { getData } from "../../core/api";
import { IEmployee } from "../../components/Table/types";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const ViewEmployee = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState<Promise<IEmployee | null>>({
    skill: [],
  });
  const fetchData = async (
    url: string,
    updateLoader: (loaderState: boolean) => void,
    errorMessage: string
  ) => {
    updateLoader(true);
    try {
      let response = (await getData(url)).data;
      if (url.includes("/employee")) {
        response = response.data;
      }
      return response;
    } catch {
      toast.error(errorMessage);
    } finally {
      updateLoader(false);
    }
  };

  // const fetchCurrentEmployeeData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = (await getData(`employee/${employeeId}`)).data.data;
  //     setEmployee({
  //       ...response,
  //       lastName: response.lastName || "",
  //       department: response.department
  //         ? response.department.department
  //         : "N/A",
  //       role: response.role ? response.role.role : "N/A",
  //     });
  //   } catch (error) {
  //     toast.error(`Employee details could not be fetched from server.`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    if (employeeId) {
      const fetchData = async () => {
        let data = await fetchData(
          `employee/${employeeId}`,
          setLoading,
          "Employee details could not be fetched from server."
        );
        setEmployee(data);
      };
    }
    // fetchCurrentEmployeeData();
  }, []);
  console.log(employee);
  return (
    <DivWrapper className="page-content">
      {loading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div>
            <h2>Employee Details</h2>
          </div>
          <p>
            Employee ID: <span>{employee.id}</span>
          </p>
          <p>
            Name:{" "}
            <span>{employee.firstName + " " + employee.lastName || "N/A"}</span>
          </p>
          <p>
            Date of Birth: <span>{employee.dob || "N/A"}</span>
          </p>
          <p>
            Address: <span>{employee.address || "N/A"}</span>
          </p>
          <p>
            Phone: <span>{employee.phone || "N/A"}</span>
          </p>
          <p>
            Email: <span>{employee.email || "N/A"}</span>
          </p>
          <p>
            Date of joining: <span>{employee.dateOfJoining || "N/A"}</span>
          </p>
          <p>
            Department: <span>{employee.department}</span>
          </p>
          <p>
            Role: <span>{employee.role}</span>
          </p>
          <div>
            <SelectedSkills
              description="Skill(s)"
              isView={true}
              selectedSkills={employee.skills}
            ></SelectedSkills>
          </div>
        </>
      )}
    </DivWrapper>
  );
};

export default ViewEmployee;
