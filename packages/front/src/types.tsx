export interface BaseProduct {
  id: string;
  title: string;
  price: ProductPrice;
  condition: string;
  free_shipping: Boolean;
}

export interface Product extends BaseProduct {
  picture: string;
  description: string;
}

export interface ProductPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ListProduct extends BaseProduct {
  thumbnail: string;
}

export interface Category {
  id: string;
  name: string;
  path_from_root?: Category[]
}

export interface Products {
  author: {
    name: string;
    lastname: string;
  };
  categories: Category[];
  items: ListProduct[];
}
