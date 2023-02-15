import { IsString } from 'class-validator';

export class ProductsInput {
  @IsString()
  q: string;
}

export class Product {
  id: String;
  title: String;
  price: {
    currency: String;
    amount: Number;
    decimals: Number;
  };
  picture: String;
  condition: String;
  free_shipping: Boolean;
}
