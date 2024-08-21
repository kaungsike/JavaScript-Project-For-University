import { createProductCardRender } from "../app/card.js"
import { createProductDetailRender } from "../app/detail.js"
import { createAddedItemRender } from "../app/myCart.js"
import { storage } from "../data/localStore.js"
import products from "../data/productsData.js"

const initialRender = () => {
    createProductCardRender(products)
    createProductDetailRender(products)
    createAddedItemRender(JSON.parse(localStorage.getItem("data")))
}

export default initialRender;