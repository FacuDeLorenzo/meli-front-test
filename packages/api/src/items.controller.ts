import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Product, ProductsInput } from './items.types';

@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  async products(@Query() { q: query }: ProductsInput): Promise<any> {
    let response = await this.itemsService.getProducts(query);

    return response;
  }
  @Get(':id')
  async product(@Param('id') id: string): Promise<Product> {
    if (!id) {
      return null;
    }

    let response = await this.itemsService.getProduct(id);

    return response;
  }
}
