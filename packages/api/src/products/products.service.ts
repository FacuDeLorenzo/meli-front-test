import { Injectable } from '@nestjs/common';
import { Category, Description, Product } from './products.types';
import { MapApiProduct, MapApiBaseProduct, MapApiCategory, MapApiDescription } from './products.mappers';
import getMostFrequent from '../../src/utils/getMostFrequent';
import jsonFetch from '../../src/utils/jsonFetch';

@Injectable()
export class ProductsService {
  async getProducts(query: string): Promise<{ items: Product[], categories: Category[] }> {
    const products = await jsonFetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
      .then(async (dirtyProducts) => {
        if (dirtyProducts.results.length == 0)
          return {
            items: [],
            categories: []
          }
        if (dirtyProducts.results.length > 0) {
          const popularCategories = getMostFrequent(dirtyProducts.results.map(product => product.category_id));
          const category =  this.getCategory(popularCategories[0]);
          const products = dirtyProducts.results.map((dirtyProduct: any) => MapApiBaseProduct(dirtyProduct))
          //Categories list source was not specified 
          return {
            items: products,
            categories: (await category).path_from_root
          }
        }
      });

    return products;
  }

  async getProduct(id: string): Promise<Product> {
    const product = this.getApiProduct(id);
    const description = this.getApiDescription(id);

    const result: Product = {
      ... await product,
      description: (await description).plain_text,
      category: await this.getCategory((await product).category.id)
    };

    return result;
  }

  async getCategory(id: string): Promise<Category> {
    return jsonFetch(`https://api.mercadolibre.com/categories/${id}`)
      .then((dirtyCategory) => MapApiCategory(dirtyCategory));
  }

  async getApiDescription(id: string): Promise<Description> {
    return jsonFetch(`https://api.mercadolibre.com/items/${id}/description`)
      .then((dirtyDescription) => MapApiDescription(dirtyDescription))
  }

  async getApiProduct(id: string): Promise<Product> {
    return jsonFetch(`https://api.mercadolibre.com/items/${id}`)
      .then((dirtyProduct) => MapApiProduct(dirtyProduct));
  }
}
