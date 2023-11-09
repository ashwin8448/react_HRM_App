import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import DivWrapper from "./styles";

const ViewEmployee = () => {
  return (
    <DivWrapper className="page-content">
      <div>
        <h2>Employee Details</h2>
      </div>
      <p>
        Name: <span></span>
      </p>
      <p>
        Date of Birth: <span></span>
      </p>
      <p>
        Address: <span></span>
      </p>
      <p>
        Phone: <span></span>
      </p>
      <p>
        Email: <span></span>
      </p>
      <p>
        Date of joining: <span></span>
      </p>
      <p>
        Department: <span></span>
      </p>
      <p>
        Role: <span></span>
      </p>
      <div>
        <SelectedSkills
          description="Skill(s)"
          isView={true}
          selectedSkills={["CSS", "HTML"]}
        ></SelectedSkills>
      </div>
    </DivWrapper>
  );
};

export default ViewEmployee;
