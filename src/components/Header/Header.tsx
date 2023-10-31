import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg"

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <SearchBar placeholder="Search by name" src={searchIcon} alt="Search icon"></SearchBar>
    </header>
  );
};

export default Header;
