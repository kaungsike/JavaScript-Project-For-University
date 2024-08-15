import { createProductCardRender } from "../app/card.js"
import { createProductDetail, createProductDetailRender } from "../app/detail.js"
import products from "../data/productsData.js"

const initialRender = () => {
    createProductCardRender(products)
    createProductDetailRender(products)
}

export default initialRender;