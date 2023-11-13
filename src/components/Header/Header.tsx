import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg";
import HeaderWrapper from "./styles";
import { useEmployeeContext } from "../../contexts/EmployeeContext";

const Header = () => {
  const { updateFilters } = useEmployeeContext();
  return (
    <HeaderWrapper className="flex">
      <h1>
        <img className="logo" src={logo} alt="logo" />
      </h1>
      <SearchBar
        placeholder="Search by name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          updateFilters({ search: [e.target.value] });
        }}
      >
        <img src={searchIcon} alt="logo" />
      </SearchBar>
    </HeaderWrapper>
  );
};

export default Header;
