import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import EmployeeProvider from "../core/store/AppContext";

const Layout = () => {
  return (
    <div className="container flex flex-column">
      <EmployeeProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </EmployeeProvider>
    </div>
  );
};

export default Layout;
