import SearchBarWrapper from "./styles";
import ISearchBarProps from "./types";

const SearchBar = ({ placeholder, children, onChange }: ISearchBarProps) => {
  return (
    <SearchBarWrapper className="flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" placeholder={placeholder} onChange={onChange} />
      </form>
      {children}
    </SearchBarWrapper>
  );
};

export default SearchBar;
