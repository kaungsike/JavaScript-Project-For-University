import { createProductCardRender } from "../app/card.js"
import { createProductDetailRender } from "../app/detail.js"
import { createAddedItemRender, createOrderListRender } from "../app/myCart.js"
import products from "../data/productsData.js"


const initialRender = () => {
    createProductCardRender(products)
    createProductDetailRender(products)
    // appendClass();
    createAddedItemRender(JSON.parse(localStorage.getItem("data")))
    createOrderListRender(JSON.parse(localStorage.getItem("data")))
}

export default initialRender;