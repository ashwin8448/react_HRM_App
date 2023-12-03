import { useLocation } from "react-router-dom";
import { useEmployeeContext } from "../../core/store/AppContext";
import SearchBarWrapper from "./styles";
import ISearchBarProps from "./types";
import ACTIONS from "../../core/store/actionTypes";

const SearchBar = ({ placeholder, children }: ISearchBarProps) => {
  const location = useLocation();
  const { state, dispatch } = useEmployeeContext();
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
          defaultValue={state.filters.search}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE_FILTERS,
              payload: { search: [e.target.value] },
            });
          }}
        />
      </form>
      {children}
    </SearchBarWrapper>
  ) : null;
};

export default SearchBar;
