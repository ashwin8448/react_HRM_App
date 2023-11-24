import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./styles";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputPage, setInputPage] = useState("1");
  useEffect(() => setSearchParams({ page: inputPage }), [inputPage]);

  const { totalPages, updateCurrentPage, filters } = useEmployeeContext();
  return totalPages > 1 &&
    (filters.search![0]
      ? filters.search![0] === ""
      : false || filters.skills!.length === 0) ? (
    <PaginationWrapper>
      <Button
        buttonType="primary-button"
        onClick={() => {
          setInputPage("1");
        }}
      >
        <img src={endIcon} alt="Show first page icon" className="icon mirror" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          let pageNumber = Number(searchParams.get("page"));
          let currentPage = pageNumber - 1 < 1 ? 1 : pageNumber - 1;
          setInputPage(String(currentPage));
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
        }}
        noValidate
      >
        <input
          type="text"
          name="page-input"
          value={inputPage}
          onInput={(e) => {
            setInputPage(e.currentTarget.value);
          }}
        />
        <span> of {totalPages} pages</span>
      </form>

      <Button
        buttonType="primary-button"
        onClick={() => {
          let pageNumber = Number(searchParams.get("page"));
          let currentPage =
            pageNumber + 1 > totalPages ? totalPages : pageNumber + 1;
          setInputPage(`${currentPage}`);
        }}
      >
        <img src={nextIcon} alt="Show next page icon" className="icon" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          setInputPage(`${totalPages}`);
        }}
      >
        <img src={endIcon} alt="Show last page icon" className="icon" />
      </Button>
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
