import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import logo_christmas from "../../assets/images/logo_christmas.svg";
import searchIcon from "../../assets/images/search_icon.svg";
import HeaderWrapper from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../../core/store/AppContext";

const Header = () => {
  const { updateFilters } = useEmployeeContext();
  const navigate = useNavigate();
  const location = useLocation();
  const currentMonth = new Date().getMonth();

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
          {currentMonth === 11 ? (
            <img className="logo" src={logo_christmas} alt="logo" />
          ) : (
            <img className="logo" src={logo} alt="logo" />
          )}
        </h1>
      </button>

      <SearchBar placeholder="Search by name">
        <img src={searchIcon} alt="logo" />
      </SearchBar>
    </HeaderWrapper>
  );
};

export default Header;
