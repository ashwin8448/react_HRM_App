import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex flex-column">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
