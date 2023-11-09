import SearchBarWrapper from "./styles";
import ISearchBarProps from "./types";

const SearchBar = ({ placeholder, src, alt }: ISearchBarProps) => {
  return (
    <SearchBarWrapper className="flex">
      <form>
        <input type="text" placeholder={placeholder} />
      </form>
      <img src={src} alt={alt} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
