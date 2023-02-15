export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: Boolean;
  description: string;
}

export interface ListProduct {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  condition: string;
  free_shipping: boolean;
  thumbnail: string;
}

export interface Products {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ListProduct[];
}
