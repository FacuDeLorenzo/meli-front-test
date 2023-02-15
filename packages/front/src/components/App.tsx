import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Products from "pages/Products";
import Product from "pages/Product";
import Search from "pages/Search";

const App = () => {
  const routes = [
    <Route path="/" element={<Search />} />,
    <Route path="/items" element={<Products />} />,
    <Route path="/items/:id" element={<Product />} />,
  ];
  const router2 = createBrowserRouter(createRoutesFromElements(routes));
  return <RouterProvider router={router2} />;
};

export default App;
