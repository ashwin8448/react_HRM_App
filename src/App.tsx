import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import EmployeeProvider from "./contexts/EmployeeContext";
import AppRoutes from "./core/routing/routing";

function App() {
  return (
    <Router>
      <EmployeeProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </EmployeeProvider>
    </Router>
  );
}

export default App;
