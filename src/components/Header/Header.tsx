import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg";
import HeaderWrapper from "./styles";
import { useEmployeeContext } from "../../contexts/EmployeeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { updateFilters } = useEmployeeContext();
  console.log(location.pathname);
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>
          <img className="logo" src={logo} alt="logo" />
        </h1>
      </Link>
      {location.pathname === "/" && (
        <SearchBar
          placeholder="Search by name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateFilters({ search: [e.target.value] });
          }}
        >
          <img src={searchIcon} alt="logo" />
        </SearchBar>
      )}
    </HeaderWrapper>
  );
};

export default Header;
