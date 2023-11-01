import SearchBarWrapper from "./SearchBar.style";

interface searchBarProps {
  placeholder?: string;
  src?: string;
  alt?: string;
}

const SearchBar = ({ placeholder, src, alt }: searchBarProps) => {
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
