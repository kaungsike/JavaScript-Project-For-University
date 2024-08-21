import { createProductCardRender } from "../app/card.js"
import { createProductDetail, createProductDetailRender } from "../app/detail.js"
import { addedItems, createAddedItemRender } from "../app/myCart.js"
import { storage } from "../data/localStore.js"
import products from "../data/productsData.js"

const initialRender = () => {
    createProductCardRender(products)
    createProductDetailRender(products)
    createAddedItemRender(storage)
}

export default initialRender;