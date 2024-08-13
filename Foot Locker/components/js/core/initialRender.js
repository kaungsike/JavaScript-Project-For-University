import { createProductCardRender } from "../app/card.js"
import products from "../data/productsData.js"

const initialRender = () => {
    createProductCardRender(products)
}

export default initialRender;