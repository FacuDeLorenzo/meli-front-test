import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  getProducts(): string {
    return 'Hello World!';
  }
  getProduct(id: number): string {
    return `Hello World!: ${id}`;
  }
}
