import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductResponse, ProductsInput, ProductsResponse } from './products.types';

@Controller('api/items')
export class ProductsController {
  constructor(private readonly itemsService: ProductsService) { }

  @Get()
  async products(@Query() { q: query }: ProductsInput): Promise<ProductsResponse> {
    const products = await this.itemsService.getProducts(query);

    const response: ProductsResponse = {
      categories: products.categories,
      items: products.items
    };

    return response;
  }
  @Get(':id')
  async product(@Param('id') id: string): Promise<ProductResponse | null> {
    if (!id) {
      return null;
    }

    const product = await this.itemsService.getProduct(id);
    const response: ProductResponse = {
      item: product
    };

    return response;
  }
}
