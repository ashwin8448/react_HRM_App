import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";
import PaginationWrapper from "./styles";
import { useEffect, useState } from "react";
import { rowsPerPage } from "../../core/config/constants";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    sortBy: "id",
    sortDir: "asc",
  });
  const updateSearchParams = (params: {
    page?: string;
    sortBy?: string;
    sortDir?: string;
  }) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      ...params,
    });
  };
  const { count } = useEmployeeContext();
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
            {pageNumber > 1 && (
        <>
      <Button
        buttonType="primary-button"
        onClick={() => {
          updateParams(1);
        }}
        title="First page"
      >
        <img src={endIcon} alt="Show first page icon" className="icon mirror" />
      </Button>
      <Button
        buttonType="primary-button"
        onClick={() => {
          updateParams(-1, "step");
        }}
        title="Previous page"
      >
        <img
          src={nextIcon}
          alt="Show previous page icon"
          className="icon mirror"
        />
      </Button></>)}

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

      {pageNumber < totalPages && (
        <>
          <Button
            buttonType="primary-button"
            onClick={() => {
              updateParams(1, "step");
            }}
            title="Next page"
          >
            <img src={nextIcon} alt="Show next page icon" className="icon" />
          </Button>
          <Button
            buttonType="primary-button"
            onClick={() => {
              updateParams(totalPages);
            }}
            title="Last page"
          >
            <img src={endIcon} alt="Show last page icon" className="icon" />
          </Button>
        </>
      )}
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
