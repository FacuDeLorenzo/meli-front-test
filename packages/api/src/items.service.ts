import { ConsoleLogger, Injectable } from '@nestjs/common';
import { BaseProduct, Product, Products } from './items.types';

@Injectable()
export class ItemsService {
  async getProducts(query: string): Promise<Products> {
    let queryResult = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
      .then((response) => { return response.json(); })
      .then((responseJson) => {
        return {
          items: responseJson.results.map(dirtyProduct => this.getCleanBaseProduct(dirtyProduct)), categories: responseJson.results.map(product => product.category_id)
        }
      });
    let response: Products = {
      author: {
        lastname: "De Lorenzo",
        name: "Facundo"
      },
      ...queryResult
    };
    return response;
  }
  async getProduct(id: string): Promise<Product> {
    let product = fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((responseJson) => this.getCleanProduct(responseJson));
    let description = fetch(`https://api.mercadolibre.com/items/${id}/description`)
      .then((response) => response.json())
      .then((responseJson) => responseJson.plain_text);

    let result: Product = { ... await product, description: await description };

    return result;
  }

  //Decided to go for a fast mapping with class initialized keys
  //Could have used object-mapper package to achieve it in a better way.
  getCleanBaseProduct(dirtyProduct: any): BaseProduct {
    try {
      let product = new BaseProduct();
      Object.keys(product).forEach(
        (key) => {
          if (dirtyProduct[key]) {
            (product as Product)[key] = dirtyProduct[key]
          }
          else {
            console.log("Key not found: ", key);
            throw new Error(`Key ${key} not found on dirtyProduct `);
          };
        }
      );
      if (dirtyProduct?.shipping?.free_shipping !== undefined)
        product.free_shipping = dirtyProduct.shipping.free_shipping;
      else
        throw new Error(`Key shipping.free_shipping not found on dirtyProduct `);
      //Decimals not recieved from API
      if (dirtyProduct?.currency_id !== undefined && dirtyProduct?.price)
        product.price = {currency: dirtyProduct?.currency_id, amount: dirtyProduct?.price, decimals: 0};
      else
        throw new Error(`Key shipping.free_shipping not found on dirtyProduct `);

      return product;
    }
    catch {
      return null
    }
  }

  getCleanProduct(dirtyProduct: any): Product {
    try {
      let product = new Product();
      Object.keys(product).forEach(
        (key) => {
          if (dirtyProduct[key]) {
            (product as Product)[key] = dirtyProduct[key]
          }
          else {
            console.log("Key not found: ", key);
            throw new Error(`Key ${key} not found on dirtyProduct `);
          };
        }
      );
      if (dirtyProduct?.shipping?.free_shipping !== undefined)
        product.free_shipping = dirtyProduct.shipping.free_shipping;
      else
        throw new Error(`Key shipping.free_shipping not found on dirtyProduct `);

      if (dirtyProduct?.pictures[0].url)
        product.picture = dirtyProduct?.pictures[0].url;
      else
        throw new Error(`Key pictures[0].url not found on dirtyProduct `);

      return product;
    }
    catch {
      return undefined
    }
  }
}
