import { useLocation } from "react-router-dom";
import SearchBarWrapper from "./styles";
import ISearchBarProps from "./types";
import { useDispatch, useSelector } from "react-redux";
import { update_filters } from "../../core/store/actions";

const SearchBar = ({ placeholder, children }: ISearchBarProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {filters} = useSelector((state:any)=>({filters:state.filters.filters}));
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
            dispatch(update_filters({ search: [e.target.value] }));
          }}
        />
      </form>
      {children}
    </SearchBarWrapper>
  ) : null;
};

export default SearchBar;
