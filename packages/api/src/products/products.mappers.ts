import getDecimalPart from '../utils/getDecimalPart';
import getWholePart from '../utils/getWholePart';
import { BaseProduct, Category, Description, Product } from './products.types';
const objectMapper = require('object-mapper');

const MapApiProduct = (apiProduct: any): Product => {
    const apiProductMap = {
        title: "title",
        condition: "condition",
        price: [
            {
                key: "price.amount",
                transform: (value?: number) => getWholePart(value),
            },
            {
                key: "price.decimals",
                transform: (value?: number) => getDecimalPart(value)
            }
        ],
        currency_id: "price.currency",
        category_id: "category.id",
        id: "id",
        thumbnail: "thumbnail",
        "shipping.free_shipping": "free_shipping",
        "pictures[0].url": "picture",
    }
    return objectMapper(apiProduct, apiProductMap);
}

const MapApiBaseProduct = (apiProduct: any): BaseProduct => {
    const apiProductMap = {
        title: "title",
        condition: "condition",
        price: [
            {
                key: "price.amount",
                transform: (value?: number) => getWholePart(value),
            },
            {
                key: "price.decimals",
                transform: (value?: number) => getDecimalPart(value)
            }
        ],
        currency_id: "price.currency",
        description: "description",
        free_shipping: "free_shipping",
        id: "id",
        thumbnail: "thumbnail",
        "shipping.free_shipping": "free_shipping",
    }
    return objectMapper(apiProduct, apiProductMap);
}

const MapApiCategory = (apiCategory: any): Category => {
    const apiCategoryMap = {
        path_from_root: "path_from_root",
        name: "name",
        id: "id",
    }
    return objectMapper(apiCategory, apiCategoryMap);
}

const MapApiDescription = (apiDescription: any): Description => {
    const apiDescriptionMap = {
        plain_text: "plain_text"
    }
    return objectMapper(apiDescription, apiDescriptionMap);
}

export {
    MapApiBaseProduct,
    MapApiProduct,
    MapApiCategory,
    MapApiDescription
}