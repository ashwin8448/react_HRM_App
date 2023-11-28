import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import ErrorPageWrapper from "./styles";
import ErrorAnimation from "../../assets/images/error_animation.gif";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorPageWrapper>
      <div>
        <img src={ErrorAnimation} alt="Error animation" />
        <h2>Error 404</h2>
        <Button buttonType={"primary-button"} onClick={() => navigate("/")}>
          <span>Back to home</span>
        </Button>
      </div>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
