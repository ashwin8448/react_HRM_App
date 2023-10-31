import EmployeeListingPage from "./EmployeeListingPage/EmployeeListingPage";
import Layout from "./Layout/Layout";
import NewOrEditEmployee from "./NewOrEditEmployeePage/NewOrEditEmployee";


function App() {
  return (
      <Layout>
         <EmployeeListingPage />
         <NewOrEditEmployee />
      </Layout>
  );
}

export default App;
