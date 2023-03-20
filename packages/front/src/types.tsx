export interface BaseProduct {
  id: string;
  title: string;
  price: ProductPrice;
  condition: ECondition;
  free_shipping: Boolean;
}

export interface ProductDTO extends BaseProduct {
  picture: string;
  description: string;
  category: Category;
}

export interface ProductResponse {
  author: {
    name: string;
    lastname: string;
  };
  item: ProductDTO;
}

export interface ProductPrice {
  currency: ECurrency;
  amount: number;
  decimals: number;
}

export interface ListProduct extends BaseProduct {
  thumbnail: string;
}

export interface Category {
  id: string;
  name: string;
  path_from_root?: Category[];
}

export interface Products {
  author: {
    name: string;
    lastname: string;
  };
  categories: Category[];
  items: ListProduct[];
}

export enum ECurrency {
  ARS = "$",
  USD = "U$S",
}

export enum ECondition {
  used = "used",
  new = "new",
}
