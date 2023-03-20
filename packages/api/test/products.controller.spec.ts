import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from 'products/products.controller';
import { ProductsService } from 'products/products.service';
import { ProductResponse, ProductsResponse } from 'products/products.types';
import { ApiBaseProductMock, ApiCategoryMock, ApiDescriptionMock, ApiProductMock, MappedApiProductMock, MappedBaseProductMock, MappedCategoryMock, MappedDescriptionMock } from './products.mocks';

describe('ProductsController', () => {
    let productsController: ProductsController;

    beforeAll(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [ProductsService],
        }).compile();

        productsController = app.get<ProductsController>(ProductsController);
    });

    describe('products endpoint', () => {
        it('should return empty arrays when query has no results', async () => {
            let expectedResponse: ProductsResponse = {
                categories: [],
                items: []
            };
            global.fetch = jest.fn()
                .mockImplementationOnce(() => {
                    return Promise.resolve({ json: () => { return { results: [] } } })
                })
            expect((await productsController.products({ q: "sth" }))).toEqual(expectedResponse);
        });

        it('should return items and categories populated when query throws results', async () => {
            let expectedResponse = {
                categories: MappedCategoryMock.path_from_root,
                items: [MappedBaseProductMock, MappedBaseProductMock]
            };
            global.fetch = jest.fn()
                .mockImplementationOnce(() => {
                    return Promise.resolve({ json: () => { return { results: [ApiBaseProductMock, ApiBaseProductMock] } } })
                })
                .mockImplementationOnce(() => {
                    return Promise.resolve({ json: () => { return ApiCategoryMock } })
                })
            expect((await productsController.products({ q: "sth" }))).toEqual(expectedResponse);
        });
    });
    describe('product detail endpoint', () => {
        it('should return null on invalid id', async () => {
            let expectedResponse: ProductResponse = null;
            expect((await productsController.product(""))).toEqual(expectedResponse);
            expect((await productsController.product(null))).toEqual(expectedResponse);
            expect((await productsController.product(undefined))).toEqual(expectedResponse);
        });

        it('should return requested product', async () => {
            let expectedResponse: ProductResponse = {
                item: {
                    ...MappedApiProductMock,
                    description: MappedDescriptionMock.plain_text,
                    category: MappedCategoryMock
                }
            };

            global.fetch = jest.fn()
                .mockImplementationOnce(() => {
                    return Promise.resolve({ json: () => { return ApiProductMock } })
                })
                .mockImplementationOnce(() => {
                    return Promise.resolve({ json: () => { return ApiDescriptionMock } })
                })
                .mockImplementationOnce(() => {
                    return Promise.resolve({ json: () => { return ApiCategoryMock } })
                });

            expect((await productsController.product(ApiProductMock.id))).toEqual(expectedResponse);
        });
    });
});
