import { createProductCardRender } from "../app/card.js"
import { createProductDetailRender } from "../app/detail.js"
import { createAddedItemRender, createOrderListRender } from "../app/myCart.js"
import products from "../data/productsData.js"

console.log(window.location.href)
const initialRender = () => {
    if(decodeURIComponent(window.location.href.split('#')[1])!="All"){
        createProductCardRender(products.filter((product) => product.gender==decodeURIComponent(window.location.href.split('#')[1])))
    }else{
        createProductCardRender(products);
    }
    createProductDetailRender(products)
    // appendClass();
    createAddedItemRender(JSON.parse(localStorage.getItem("data")))
    createOrderListRender(JSON.parse(localStorage.getItem("data")))
}

export default initialRender;