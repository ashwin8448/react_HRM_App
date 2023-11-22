import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./styles";
import { useRef } from "react";
import { useEmployeeContext } from "../../contexts/EmployeeContext";

const Pagination = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { totalPages, updateCurrentPage } = useEmployeeContext();
  return totalPages > 1 ? (
    <PaginationWrapper>
      <Button
        buttonType="primary-button"
        onClick={() => {
          inputRef.current!.value = "1";
        }}
      >
        <img src={endIcon} alt="Show first page icon" className="icon mirror" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          let currentPage = Number(inputRef.current!.value) - 1;
          inputRef.current!.value = String(currentPage);
          updateCurrentPage(currentPage);
        }}
      >
        <img
          src={nextIcon}
          alt="Show previous page icon"
          className="icon mirror"
        />
      </Button>

      <form>
        <input type="number" defaultValue={1} ref={inputRef} />
        <span> of {totalPages} pages</span>
      </form>

      <Button
        buttonType="primary-button"
        onClick={() => {
          let currentPage = Number(inputRef.current!.value) + 1;
          inputRef.current!.value = String(currentPage);
          updateCurrentPage(currentPage);
        }}
      >
        <img src={nextIcon} alt="Show next page icon" className="icon" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          inputRef.current!.value = String(Number(totalPages));
        }}
      >
        <img src={endIcon} alt="Show last page icon" className="icon" />
      </Button>
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
