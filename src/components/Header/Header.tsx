import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg";
import HeaderWrapper from "./Header.style";

const Header = () => {
  return (
    <HeaderWrapper className="flex container">
      <h1>
        <img className="logo" src={logo} alt="logo" />
      </h1>
      <SearchBar
        placeholder="Search by name"
        src={searchIcon}
        alt="Search icon"
      ></SearchBar>
    </HeaderWrapper>
  );
};

export default Header;
