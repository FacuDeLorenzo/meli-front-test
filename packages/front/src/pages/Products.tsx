import Breadcrumbs from "@mui/material/Breadcrumbs";
import ProductListItem from "components/styled/ProductIListtem";
import Searcher from "components/styled/Searcher";
import { Product } from "types";

const Products = () => {
  return (
    <>
      <Searcher />
      <Breadcrumbs aria-label="breadcrumb">//Todo: Add breadcrumbs</Breadcrumbs>
      <ProductListItem product={productMock} />
      <ProductListItem product={productTwoMock} />
    </>
  );
};

const productMock: Product = {
  id: "1",
  title: "el mejor producto del mundo",
  price: { currency: "ARS", amount: 999999, decimals: 99 },
  condition: "new",
  free_shipping: true,
  picture: "",
};
const productTwoMock: Product = {
  id: "2",
  title: "el mejor producto del mundo",
  price: { currency: "ARS", amount: 999999, decimals: 99 },
  condition: "new",
  free_shipping: true,
  picture: "",
};
export default Products;
