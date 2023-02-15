import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ProductsView from "pages/Products";
import Product from "pages/Product";
import Search from "pages/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const router2 = createBrowserRouter(createRoutesFromElements(routes));
  const queryClient = new QueryClient();

  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router2} />
      </QueryClientProvider>
    </>
  );
};

const routes = [
  <Route path="/" element={<Search />} />,
  <Route path="/items" element={<ProductsView />} />,
  <Route path="/items/:id" element={<Product />} />,
];

export default App;
