import { BaseProduct, Category, Description, ECondition, Product } from "../src/products/products.types";
import getDecimalPart from "../src/utils/getDecimalPart";
import getWholePart from "../src/utils/getWholePart";


export const ApiCategoryMock = {
    id: "MLA3697",
    name: "Auriculares",
    path_from_root: [
        {
            "id": "MLA1000",
            "name": "Electrónica, Audio y Video"
        },
        {
            "id": "MLA409810",
            "name": "Audio"
        },
        {
            "id": "MLA3697",
            "name": "Auriculares"
        }
    ]
}

export const MappedCategoryMock: Category = {
    id: ApiCategoryMock.id,
    name: ApiCategoryMock.name,
    path_from_root: ApiCategoryMock.path_from_root
}

export const ApiDescriptionMock = {
    plain_text: "test description for testing purposes in order to test"
}

export const MappedDescriptionMock: Description = {
    plain_text: ApiDescriptionMock.plain_text
}

export const ApiProductMock = {
    title: "Auriculares Akg K52 Matte Black",
    condition: "new",
    price: 17699,
    currency_id: "ARS",
    category_id: "MLA3697",
    id: "MLA1322703468",
    thumbnail: "http://http2.mlstatic.com/D_880229-MLA40185360474_122019-I.jpg",
    shipping: {
        free_shipping: true,
    },
    pictures: [
        { url: "http://http2.mlstatic.com/D_880229-MLA40185360474_122019-I.jpg", }
    ]
}

export const MappedApiProductMock: Product = {
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

export const ApiBaseProductMock = {
    title: "Auriculares Akg K52 Matte Black",
    condition: "new",
    price: 17699,
    currency_id: "ARS",
    id: "MLA1322703468",
    thumbnail: "http://http2.mlstatic.com/D_880229-MLA40185360474_122019-I.jpg",
    shipping: {
        free_shipping: true,
    },
}

export const MappedBaseProductMock: BaseProduct = {
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
}
