import { useEmployeeContext } from "../../contexts/EmployeeContext";
import SearchBarWrapper from "./styles";
import ISearchBarProps from "./types";

const SearchBar = ({ placeholder, children }: ISearchBarProps) => {
  const { updateFilters, filters } = useEmployeeContext();
  return (
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
  );
};

export default SearchBar;
