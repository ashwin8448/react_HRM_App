import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./Pagination.style";

const Pagination = () => {
  return (
    <PaginationWrapper className="flex container">
      <Button className="mirror" src={endIcon} alt="Show first page icon" />
      <Button className="mirror" src={nextIcon} alt="Show previous page icon" />

      <form>
        <input />
        <span>(Page info)</span>
      </form>

      <Button src={nextIcon} alt="Show next page icon" />
      <Button src={endIcon} alt="Show last page icon" />
    </PaginationWrapper>
  );
};

export default Pagination;
