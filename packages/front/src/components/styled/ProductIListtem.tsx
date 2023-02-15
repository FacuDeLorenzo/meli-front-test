import { Product } from "types";

interface IProductListItem {
  product: Product;
}

const ProductListItem = ({product}: IProductListItem) => {
  return <div>Producto!</div>;
};

export default ProductListItem;
