import { MapApiBaseProduct, MapApiCategory, MapApiDescription, MapApiProduct } from '../src/products/products.mappers';
import { Description } from '../src/products/products.types';
import { ApiCategoryMock, ApiDescriptionMock, ApiProductMock, MappedApiProductMock, MappedBaseProductMock, MappedCategoryMock } from './products.mocks';

describe('ProductsMapper', () => {

  describe('MapApiProduct', () => {
    it('should return mapped product', () => {
      expect(MapApiProduct(ApiProductMock)).toEqual(MappedApiProductMock);
    });
  });

  describe('MapApiBaseProduct', () => {
    it('should return mapped base product', () => {
      expect(MapApiBaseProduct(ApiProductMock)).toEqual(MappedBaseProductMock);
    });
  });

  describe('MapApiCategory', () => {
    it('should return mapped category', () => {
      expect(MapApiCategory(ApiCategoryMock)).toEqual(MappedCategoryMock);
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

