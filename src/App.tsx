import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Products from "./Products";
import Product from "./Product";
import Search from "./Search";

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
