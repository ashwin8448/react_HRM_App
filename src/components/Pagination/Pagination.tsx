import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./styles";
import { useEffect, useState } from "react";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { rowsPerPage } from "../../core/config/constants";

const Pagination = () => {
  const { searchParams, updateSearchParams, count } = useEmployeeContext();
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => setTotalPages(Math.ceil(count / rowsPerPage)), [count]);
  const [pageInput, setPageInput] = useState("1");
  let pageNumber = Number(searchParams.get("page"));
  const checkPage = (newPage: number) => {
    return newPage > totalPages ? totalPages : newPage < 1 ? 1 : newPage;
  };
  const updateParams = (update: number, mode?: string) => {
    pageNumber =
      mode === "step" ? checkPage(pageNumber + update) : checkPage(update);
    updateSearchParams({ page: String(pageNumber) });
  };
  useEffect(() => {
    if (!searchParams.get("page"))
      updateSearchParams({ page: searchParams.get("page") || "1" });
  }, []);
  useEffect(() => {
    setPageInput(searchParams.get("page") || "1");
  }, [searchParams]);
  return totalPages > 1 ? (
    <PaginationWrapper>
      <Button
        buttonType="primary-button"
        onClick={() => {
          updateParams(1);
        }}
      >
        <img src={endIcon} alt="Show first page icon" className="icon mirror" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          updateParams(-1, "step");
        }}
      >
        <img
          src={nextIcon}
          alt="Show previous page icon"
          className="icon mirror"
        />
      </Button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isNaN(Number(pageInput))) {
            setPageInput("1");
            updateParams(1);
          } else updateParams(Number(pageInput));
        }}
        noValidate
      >
        <input
          type="text"
          name="page-input"
          value={pageInput}
          onChange={(e) => {
            setPageInput(e.target.value);
          }}
        />
        <span> of {totalPages} pages</span>
      </form>

      <Button
        buttonType="primary-button"
        onClick={() => {
          updateParams(1, "step");
        }}
      >
        <img src={nextIcon} alt="Show next page icon" className="icon" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          updateParams(totalPages);
        }}
      >
        <img src={endIcon} alt="Show last page icon" className="icon" />
      </Button>
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
