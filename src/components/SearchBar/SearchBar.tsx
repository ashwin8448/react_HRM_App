import { useLocation } from "react-router-dom";
import { useEmployeeContext } from "../../core/store/AppContext";
import SearchBarWrapper from "./styles";
import ISearchBarProps from "./types";

const SearchBar = ({ placeholder, children }: ISearchBarProps) => {
  const location = useLocation();
  const { updateFilters, filters } = useEmployeeContext();
  return location.pathname === "/" ||
    location.pathname === "/react_HRM_App/" ? (
    <SearchBarWrapper className="flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={filters.search}
          onChange={(e) => {
            updateFilters({ search: [e.target.value] });
          }}
        />
      </form>
      {children}
    </SearchBarWrapper>
  ) : null;
};

export default SearchBar;
