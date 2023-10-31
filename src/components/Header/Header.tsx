import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={Logo} alt="logo" />
      </h1>
      <SearchBar></SearchBar>
    </header>
  );
};

export default Header;
