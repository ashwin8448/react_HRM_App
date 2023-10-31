interface searchBarProps {
  placeholder?: string;
  src?: string;
  alt?: string;
}

const SearchBar = ({ placeholder, src, alt }: searchBarProps) => {
  return (
    <div>
      <form>
        <input type="text" placeholder={placeholder} />
      </form>
      <img src={src} alt={alt} />
    </div>
  );
};

export default SearchBar;
