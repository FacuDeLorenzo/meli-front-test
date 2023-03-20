import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, Products, ProductsInput } from './products.types';

@Controller('api/items')
export class ProductsController {
  constructor(private readonly itemsService: ProductsService) { }

  @Get()
  async products(@Query() { q: query }: ProductsInput): Promise<Products> {
    const products = await this.itemsService.getProducts(query);

    const response: Products = {
      categories: products.categories,
      items: products.items
    };

    return response;
  }
  @Get(':id')
  async product(@Param('id') id: string): Promise<Product> {
    if (!id) {
      return null;
    }

    const product = await this.itemsService.getProduct(id);

    return product;
  }
}
