import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import store from "../core/store/";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <div className="container flex flex-column">
      <Provider store={store}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </div>
  );
};

export default Layout;
