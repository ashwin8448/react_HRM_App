import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg";
import HeaderWrapper from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../../contexts/EmployeeContext";

const Header = () => {
  const { updateFilters } = useEmployeeContext();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <HeaderWrapper>
      <button
        onClick={() => {
          if (
            !(
              location.pathname === "/" ||
              location.pathname === "/react-HRM-App"
            )
          ) {
            updateFilters({ skills: [], search: [""] });
            navigate("/");
          }
        }}
      >
        <h1>
          <img className="logo" src={logo} alt="logo" />
        </h1>
      </button>

      <SearchBar placeholder="Search by name">
        <img src={searchIcon} alt="logo" />
      </SearchBar>
    </HeaderWrapper>
  );
};

export default Header;
