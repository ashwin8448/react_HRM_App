import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./styles";
import { FormEvent, useRef } from "react";
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
          updateCurrentPage(1);
        }}
      >
        <img src={endIcon} alt="Show first page icon" className="icon mirror" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          let currentPage =
            Number(inputRef.current!.value) - 1 < 1
              ? 1
              : Number(inputRef.current!.value) - 1;
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

      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          let pageInput = e.currentTarget["page-input"].value;
          e.currentTarget["page-input"].value =
            pageInput < 1 ? 1 : pageInput > totalPages ? totalPages : pageInput;
          updateCurrentPage(e.currentTarget["page-input"].value);
        }}
        noValidate
      >
        <input
          type="number"
          defaultValue={1}
          name="page-input"
          ref={inputRef}
          max={totalPages}
          min={1}
          
        />
        <span> of {totalPages} pages</span>
      </form>

      <Button
        buttonType="primary-button"
        onClick={() => {
          let currentPage =
            Number(inputRef.current!.value) + 1 > totalPages
              ? totalPages
              : Number(inputRef.current!.value) + 1;
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
          updateCurrentPage(totalPages);
        }}
      >
        <img src={endIcon} alt="Show last page icon" className="icon" />
      </Button>
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
