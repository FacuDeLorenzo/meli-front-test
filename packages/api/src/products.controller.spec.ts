import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductDTO, ProductsDTO, ECurrency, ECondition } from './products/products.types';

describe('ProductsController', () => {
  let productsController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = app.get<ProductsController>(ProductsController);
  });

  describe('products', () => {
    let expectedResponse: ProductsDTO = {
      author: {
        lastname: "De Lorenzo",
        name: "Facundo"
      },
      categories: null, //mock categories
      items: null //mock items
    };
    it('should return mocked list of products', () => {
      expect(productsController.products({ q: "sth" })).toBe(expectedResponse);
    });
  });

  describe('product', () => {
    it('should return mocked product', () => {
      const expectedResponse: ProductDTO = {
        author: {
          lastname: "De Lorenzo",
          name: "Facundo"
        },
        item: {
          id: "MLA429749",
          condition: ECondition.new,
          description: "testDescription",
          free_shipping: true,
          picture: "testPictureUrl",
          price: {
            amount: 999,
            currency: ECurrency.ARS,
            decimals: 88
          },
          thumbnail: "testThumbnail",
          title: "testTitle",
          category: {
            id: "testCategory",
            name: "testCategoryName",
            path_from_root: [
              {
                id: "testCategory",
                name: "testCategoryName",
              }
            ]
          }
        }
      }
      expect(productsController.product(expectedResponse.item.id)).toBe(expectedResponse);
    });

    it('should return null if id is invalid', () => {
      expect(productsController.product("")).toBe(null);
      expect(productsController.product(undefined)).toBe(null);
      expect(productsController.product(null)).toBe(null);
    });
  });
});
