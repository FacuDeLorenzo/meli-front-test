import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  products(): string {
    return this.itemsService.getProducts();
  }
  @Get(':id')
  product(@Param() params): string {
    if (params?.id) {
      return null;
    }
    return this.itemsService.getProduct(params?.id);
  }
}
