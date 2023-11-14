import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./styles";

const Pagination = () => {
  return (
    <PaginationWrapper>
      <Button buttonType="primary-button">
        <img src={endIcon} alt="Show first page icon" className="icon mirror" />
      </Button>
      <Button buttonType="primary-button">
        <img
          src={nextIcon}
          alt="Show previous page icon"
          className="icon mirror"
        />
      </Button>

      <form>
        <input type="number" defaultValue={1} />
        <span> of 2 pages</span>
      </form>

      <Button buttonType="primary-button">
        <img src={nextIcon} alt="Show next page icon" className="icon" />
      </Button>
      <Button buttonType="primary-button">
        <img src={endIcon} alt="Show last page icon" className="icon" />
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
