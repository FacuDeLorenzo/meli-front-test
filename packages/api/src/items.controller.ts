import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
  constructor(private readonly appService: ItemsService) { }

  @Get()
  products(): string {
    return this.appService.getProducts();
  }
  @Get(':id')
  product(@Param() params): string {
    if (params?.id) {
      return null;
    }
    return this.appService.getProduct(params?.id);
  }
}
