import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table";
import TableOptions from "./components/TableOptions/TableOptions";

function App() {
  return (
    <>
      <Header />
      <br />
      <TableOptions />
      <br />
      <Table />
      <br />
      <Pagination />
      <br />
      <Footer />
    </>
  );
}

export default App;
