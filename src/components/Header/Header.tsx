import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg";
import HeaderWrapper from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>
          <img className="logo" src={logo} alt="logo" />
        </h1>
      </Link>
      {(location.pathname === "/" ||
        location.pathname === "/react_HRM_App/") && (
        <SearchBar placeholder="Search by name">
          <img src={searchIcon} alt="logo" />
        </SearchBar>
      )}
    </HeaderWrapper>
  );
};

export default Header;
