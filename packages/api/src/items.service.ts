import { Injectable } from '@nestjs/common';
import { Product } from './items.types';

@Injectable()
export class ItemsService {
  async getProducts(query: string): Promise<any> {
    let result = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then((response) => { return response.json(); });
    return result;
  }
  async getProduct(id: string): Promise<Product> {
    let product = fetch(`https://api.mercadolibre.com/items/${id}`).then((response) => { return response.json(); });
    let description = fetch(`https://api.mercadolibre.com/items/${id}/description`).then((response) => { return response.json() });

    let result = { ... await product, ... await description };

    return result;
  }
}
