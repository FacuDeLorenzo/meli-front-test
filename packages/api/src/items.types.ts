import { IsString } from 'class-validator';

//Used an input class to be able to validate the request properties types.
export class ProductsInput {
  @IsString()
  q: string;
}
//Used a constructor in order to create a fast mapper on the service
export class BaseProduct {
  constructor() {
    this.id = "";
    this.title = "";
    this.price = {
      currency: "",
      amount: 0,
      decimals: 0,
    };
    this.condition = "";
    this.thumbnail = "";
  }
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

export class Product extends BaseProduct {
  constructor() {
    super();
  }
  picture: string;
  description: string;
}

export class Products {
  author: {
    name: string
    lastname: string
  };
  categories: string[];
  items: Product[]
}

