import { IsString } from 'class-validator';

//Used an input class to be able to validate the request properties types.
export class ProductsInput {
  @IsString()
  q: string;
}

export interface BaseProduct {
  id: string;
  title: string;
  price: ProductPrice;
  condition: ECondition;
  free_shipping: boolean;
  thumbnail: string;
}

export interface Product extends BaseProduct {
  picture: string;
  description: string;
  category: Category;
}

export interface Products {
  categories: Category[];
  items: Product[]
}

export interface ProductPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Category {
  id: string;
  name: string;
  path_from_root?: Category[]
}

export interface Description {
  plain_text: string;
}

export interface Author {
  lastname: string;
  name: string;
}

export enum ECurrency {
  ARS = "$",
  USD ="U$S"
}

export enum ECondition {
  used = "used",
  new = "new",
}