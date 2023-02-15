import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let itemsController: ItemsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService],
    }).compile();

    itemsController = app.get<ItemsController>(ItemsController);
  });

  describe('products', () => {
    it('should return "Hello World!"', () => {
      expect(itemsController.products()).toBe('Hello World!');
    });
  });

  describe('product', () => {
    it('should return "Hello World!: {1}"', () => {
      expect(itemsController.product(1)).toBe('Hello World!: 1');
    });

    it('should return null if id is invalid', () => {
      expect(itemsController.product(0)).toBe(null);
      expect(itemsController.product(undefined)).toBe(null);
      expect(itemsController.product(null)).toBe(null);
    });
  });
});
