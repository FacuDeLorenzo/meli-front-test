import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO, ProductsDTO, ProductsInput } from './products.types';

@Controller('api/items')
export class ProductsController {
  constructor(private readonly itemsService: ProductsService) { }

  @Get()
  async products(@Query() { q: query }: ProductsInput): Promise<ProductsDTO> {
    const products = await this.itemsService.getProducts(query);

    const response: ProductsDTO = {
      author: {
        lastname: "De Lorenzo",
        name: "Facundo"
      },
      categories: products.categories,
      items: products.items
    };

    return response;
  }
  @Get(':id')
  async product(@Param('id') id: string): Promise<ProductDTO> {
    if (!id) {
      return null;
    }

    const product = await this.itemsService.getProduct(id);

    const response: ProductDTO = {
      author: {
        lastname: "De Lorenzo",
        name: "Facundo"
      },
      item: product
    };
    return response;
  }
}
