import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import EmployeeProvider from "./contexts/EmployeeContext";
import AppRoutes from "./core/routing/routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Router>
        <EmployeeProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </EmployeeProvider>
      </Router>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </>
  );
}

export default App;
