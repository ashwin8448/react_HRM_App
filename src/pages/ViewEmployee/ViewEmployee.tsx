import { useNavigate, useParams } from "react-router-dom";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import DivWrapper from "./styles";
import { useState, useEffect } from "react";
import { IEmployee } from "../../components/Table/types";
import { CircularProgress } from "@mui/material";
import { apiURL } from "../../core/config/constants";
import fetchData from "../../utils/apiFetchCall";

const ViewEmployee = () => {
  const { employeeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState<IEmployee>();
  const navigate = useNavigate();
  const updateLoading = (loaderState: boolean) => {
    setLoading(loaderState);
  };
  useEffect(() => {
    if (employeeId) {
      fetchData(
        apiURL.employee + "/" + employeeId,
        updateLoading,
        "Employee details could not be fetched from server."
      )
        .then((data) =>
          setEmployee({
            ...data,
            lastName: data.lastName || "",
            department: data.department ? data.department.department : "N/A",
            role: data.role ? data.role.role : "N/A",
          })
        )
        .catch(() => {
          // navigate("/");
        });
    }
  }, []);
  return (
    <DivWrapper className="page-content">
      {!(!loading && employee) ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div>
            <h2>Employee Details</h2>
          </div>
          <div className="flex employeeDetailsContainer">
            <p>
              Employee ID: <span>{employee.id}</span>
            </p>
            <p>
              Name:{" "}
              <span>
                {employee.firstName + " " + employee.lastName || "N/A"}
              </span>
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
          </div>
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
