import { MapApiBaseProduct, MapApiCategory, MapApiDescription, MapApiProduct } from '../../src/products/products.mappers';
import getDecimalPart from '../../src/utils/getDecimalPart';
import getWholePart from '../../src/utils/getWholePart';
import { BaseProduct, Category, Description, ECondition, Product } from '../../src/products/products.types';
import { ApiCategoryMock, ApiDescriptionMock, ApiProductMock } from './products.mocks';

describe('ProductsMapper', () => {
  beforeEach(async () => {
  });

  describe('MapApiProduct', () => {
    let expectedObject: Product = {
      id: ApiProductMock.id,
      title: ApiProductMock.title,
      thumbnail: ApiProductMock.thumbnail,
      price: {
        amount: getWholePart(ApiProductMock.price),
        currency: ApiProductMock.currency_id,
        decimals: getDecimalPart(ApiProductMock.price)
      },
      category: {
        id: ApiProductMock.category_id,
        name: undefined
      },
      picture: ApiProductMock.pictures[0].url,
      condition: ECondition[ApiProductMock.condition],
      description: undefined,
      free_shipping: ApiProductMock.shipping.free_shipping,
    };
    it('should return mapped product', () => {
      expect(MapApiProduct(ApiProductMock)).toEqual(expectedObject);
    });
  });

  describe('MapApiBaseProduct', () => {
    let expectedObject: BaseProduct = {
      id: ApiProductMock.id,
      title: ApiProductMock.title,
      thumbnail: ApiProductMock.thumbnail,
      price: {
        amount: getWholePart(ApiProductMock.price),
        currency: ApiProductMock.currency_id,
        decimals: getDecimalPart(ApiProductMock.price)
      },
      condition: ECondition[ApiProductMock.condition],
      free_shipping: ApiProductMock.shipping.free_shipping,
    };
    it('should return mapped base product', () => {
      expect(MapApiBaseProduct(ApiProductMock)).toEqual(expectedObject);
    });
  });

  describe('MapApiCategory', () => {
    let expectedObject: Category = {
      id: ApiCategoryMock.id,
      name: ApiCategoryMock.name,
      path_from_root: ApiCategoryMock.path_from_root
    };
    it('should return mapped category', () => {
      expect(MapApiCategory(ApiCategoryMock)).toEqual(expectedObject);
    });
  });

  describe('MapApiDescription', () => {
    let expectedObject: Description = {
      plain_text: ApiDescriptionMock.plain_text
    };
    it('should return mapped description', () => {
      expect(MapApiDescription(ApiDescriptionMock)).toEqual(expectedObject);
    });
  });
});

