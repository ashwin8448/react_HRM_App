import Layout from "./Layout/Layout";
import { RouterProvider } from "react-router-dom";
import router from "./core/routing/routing";

function App() {
  return (
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  );
}

export default App;
