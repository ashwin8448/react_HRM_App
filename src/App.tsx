import Layout from "./Layout/Layout";
import { RouterProvider } from "react-router-dom";
import router from "./core/routing/routing";
import EmployeeProvider from "./contexts/EmployeeContext";

function App() {

  return (
    <EmployeeProvider>
      <Layout>
        <RouterProvider router={router}></RouterProvider>
      </Layout>
    </EmployeeProvider>
  );
}

export default App;
